import type { Metadata } from "next";
import Widget from "@/components/Widget";
import { services, categoryOrder, categoryLabels } from "@/data/services";

export const metadata: Metadata = {
  title: "Homelab | Tyler Koenig",
  description:
    "Production-grade personal homelab: Proxmox, pfSense, 8 VLANs, WireGuard, Caddy, Authentik SSO, and 20+ self-hosted services.",
};

const glanceStats = [
  { label: "Hypervisor", value: "Proxmox VE" },
  { label: "Firewall", value: "pfSense (Intel N100)" },
  { label: "Switching", value: "TP-Link Omada (managed)" },
  { label: "ISP", value: "AT&T Fiber 1 Gbps" },
  { label: "VPN", value: "WireGuard (pfSense)" },
  { label: "Reverse Proxy", value: "Caddy + Cloudflare DNS-01" },
  { label: "Auth", value: "Authentik SSO" },
  { label: "DNS", value: "Pi-hole → Unbound → Cloudflare" },
  { label: "Containers", value: "9 LXC + 2 VMs" },
];

const vlans = [
  { id: "1000", name: "MGMT",    subnet: "10.0.0.0/24",   purpose: "Network equipment only" },
  { id: "1010", name: "LAN",     subnet: "10.1.0.0/24",   purpose: "Trusted personal devices" },
  { id: "1020", name: "Homelab", subnet: "10.2.0.0/24",   purpose: "All self-hosted services" },
  { id: "1030", name: "Guests",  subnet: "10.3.0.0/24",   purpose: "Internet only, RFC1918 blocked" },
  { id: "1040", name: "IoT",     subnet: "10.4.0.0/24",   purpose: "Smart home, isolated" },
  { id: "1050", name: "WFH",     subnet: "10.5.0.0/24",   purpose: "Work devices, no personal access" },
  { id: "DMZ",  name: "DMZ",     subnet: "10.99.0.0/24",  purpose: "Public-facing, hard-blocked internally" },
  { id: "VPN",  name: "VPN",     subnet: "10.200.0.0/24", purpose: "WireGuard clients = LAN access" },
];

const adrs = [
  {
    title: "AT&T Gateway: IP Passthrough over EAP bypass",
    decision:
      "BGW320 stays in-line with IP Passthrough mode. pfSense gets the public IP directly. Gateway WiFi disabled.",
    why: "AT&T locks 802.1X auth to their gateway hardware. EAP proxy bypass is brittle — breaks on firmware updates and only saves 1–2ms. True bridge mode isn't supported.",
  },
  {
    title: "Caddy over NGINX Proxy Manager",
    decision:
      "Caddy with DNS-01 challenge via Cloudflare API. All subdomains resolve to Caddy internally via Pi-hole. Caddy terminates SSL and proxies to backends.",
    why: "Single Caddyfile, auto-cert without exposing port 80/443 to the internet. NPM has more UI overhead for the same outcome. Traefik is more complex for no benefit here.",
  },
  {
    title: "WireGuard over OpenVPN",
    decision:
      "WireGuard on pfSense, UDP 51820, VPN subnet 10.200.0.0/24. Clients get LAN + MGMT access, blocked from Guest/IoT/WFH.",
    why: "Faster, simpler config, better battery life on mobile. ~600–900 Mbps on an N100. OpenVPN has no advantage here. Tailscale adds an external relay dependency.",
  },
  {
    title: "Pi-hole in Homelab VLAN, not MGMT",
    decision:
      "Pi-hole at 10.2.0.11 (VLAN 1020). Firewall allows port 53 inbound from all VLANs. MGMT uses pfSense Unbound as its primary DNS.",
    why: "Putting Pi-hole in MGMT would require opening MGMT to all VLANs — a larger attack surface. DNS traffic crossing into Homelab VLAN is the lesser risk.",
  },
  {
    title: "N100 for pfSense",
    decision:
      "Intel N100 mini PC: 4-core 3.4 GHz, ~6W idle. Handles 2–3 Gbps routing and 600–900 Mbps WireGuard.",
    why: "Right-sized for 1 Gbps fiber with headroom. Raspberry Pi can't handle 1 Gbps + VPN. A full rack server wastes power for this role.",
  },
  {
    title: "Shared Postgres + Redis in apps LXC",
    decision:
      "One Postgres instance, multiple databases. One Redis instance. A single init script provisions all schemas on first run.",
    why: "Avoids 15 separate DB containers. Reduces RAM overhead significantly. All productivity apps share the same LXC (10.2.0.60).",
  },
  {
    title: "Gitea CI/CD: Self-hosted runner with container build + SSH rsync deploy",
    decision:
      "act_runner v0.3.1 on Gitea LXC (10.99.0.22). Push to dev → node:22-alpine container builds Next.js → rsync out/ to Portfolio LXC → SSH docker rebuild.",
    why: "Keeps the full pipeline internal — no GitHub Actions, no external runners. Build runs in an isolated Alpine container so the Gitea LXC isn't polluted. Portfolio LXC (10.99.0.23) just serves pre-built static files via nginx.",
  },
];

export default function HomelabPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[var(--color-text-label)] tracking-widest uppercase">
            lerkolabs
          </span>
          <div className="flex-1 h-px bg-[var(--color-border)]" aria-hidden="true" />
        </div>
        <h1 className="font-mono text-lg font-bold text-[var(--color-text)] mb-3">
          Home Infrastructure Lab
        </h1>
        <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed max-w-2xl opacity-80">
          Personal infrastructure environment for learning, self-hosting, and operational
          practice. Running 24/7 on production-grade hardware with real network segmentation,
          SSO, monitoring, and IaC-style documentation.
        </p>
      </div>

      {/* At a Glance */}
      <Widget title="at a glance" badge={glanceStats.length} as="section">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {glanceStats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-[var(--color-surface)] px-4 py-3"
            >
              <p className="font-mono text-xs text-[var(--color-text-dim)] uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="font-mono text-sm text-[var(--color-text)]">{value}</p>
            </div>
          ))}
        </div>
      </Widget>

      {/* VLAN table */}
      <Widget
        title="network"
        meta="8 isolated vlans · default deny inter-vlan"
        as="section"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="font-mono text-[var(--color-text-dim)] text-left py-2 pr-6 uppercase tracking-wider">
                  VLAN
                </th>
                <th className="font-mono text-[var(--color-text-dim)] text-left py-2 pr-6 uppercase tracking-wider">
                  Name
                </th>
                <th className="font-mono text-[var(--color-text-dim)] text-left py-2 pr-6 uppercase tracking-wider">
                  Subnet
                </th>
                <th className="font-mono text-[var(--color-text-dim)] text-left py-2 uppercase tracking-wider">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {vlans.map((v) => (
                <tr
                  key={v.id}
                  className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                >
                  <td className="font-mono text-[var(--color-accent-green)] py-2.5 pr-6">
                    {v.id}
                  </td>
                  <td className="font-mono text-[var(--color-text)] py-2.5 pr-6">{v.name}</td>
                  <td className="font-mono text-[var(--color-text-label)] py-2.5 pr-6">
                    {v.subnet}
                  </td>
                  <td className="font-sans text-sm text-[var(--color-text)] py-2.5 opacity-80">{v.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Widget>

      {/* Services */}
      <Widget
        title="services"
        badge={services.length}
        as="section"
      >
        <div className="flex flex-col gap-8">
          {categoryOrder.map((cat) => {
            const catServices = services.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <p className="font-mono text-xs text-[var(--color-text-dim)] uppercase tracking-wider mb-3">
                  {categoryLabels[cat]}
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)]">
                  {catServices.map((svc) => (
                    <div
                      key={svc.name}
                      className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-raised)] flex items-start gap-3 px-4 py-3"
                    >
                      <i
                        className={`${svc.icon} text-[var(--color-text-label)] text-xs mt-0.5 w-3.5 shrink-0`}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-mono text-xs text-[var(--color-text)] mb-0.5">
                          {svc.name}
                        </p>
                        <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed opacity-75">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Widget>

      {/* ADRs */}
      <Widget
        title="architecture decisions"
        meta="why things are configured the way they are"
        badge={adrs.length}
        as="section"
      >
        <div className="flex flex-col gap-px bg-[var(--color-border)]">
          {adrs.map((adr) => (
            <div
              key={adr.title}
              className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-raised)] px-4 py-4"
            >
              <p className="font-mono text-sm text-[var(--color-text)] mb-2">{adr.title}</p>
              <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed mb-1.5 opacity-75">
                <span className="text-[var(--color-text-label)] opacity-100">decision: </span>
                {adr.decision}
              </p>
              <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed opacity-75">
                <span className="text-[var(--color-text-label)] opacity-100">why: </span>
                {adr.why}
              </p>
            </div>
          ))}
        </div>
      </Widget>

      {/* GitHub CTA */}
      <section className="border-t border-[var(--color-border)] pt-6">
        <p className="font-mono text-sm text-[var(--color-text-label)] mb-1">lerkolabs on GitHub</p>
        <p className="font-sans text-sm text-[var(--color-text)] mb-3 opacity-75">
          Full documentation: VLAN maps, runbooks, service registry, config exports, and setup guides.
        </p>
        <a
          href="https://github.com/lerko96/homelab-wip"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[var(--color-text-label)] hover:text-[var(--color-text)]"
        >
          ↗ github.com/lerko96/homelab-wip
        </a>
      </section>
    </>
  );
}
