import type { Metadata } from "next";
import { services, categoryOrder, categoryLabels } from "@/data/services";

export const metadata: Metadata = {
  title: "Homelab | Tyler Koenig",
  description:
    "Production-grade personal homelab: Proxmox, pfSense, 8 VLANs, WireGuard, Caddy, Authentik SSO, and 20+ self-hosted services.",
};

const vlans = [
  { id: "1000", name: "MGMT", subnet: "10.0.0.0/24", purpose: "Network equipment only" },
  { id: "1010", name: "LAN", subnet: "10.1.0.0/24", purpose: "Trusted personal devices" },
  { id: "1020", name: "Homelab", subnet: "10.2.0.0/24", purpose: "All self-hosted services" },
  { id: "1030", name: "Guests", subnet: "10.3.0.0/24", purpose: "Internet only, RFC1918 blocked" },
  { id: "1040", name: "IoT", subnet: "10.4.0.0/24", purpose: "Smart home, isolated" },
  { id: "1050", name: "WFH", subnet: "10.5.0.0/24", purpose: "Work devices, no personal access" },
  { id: "DMZ", name: "DMZ", subnet: "10.99.0.0/24", purpose: "Public-facing, hard-blocked internally" },
  { id: "VPN", name: "VPN", subnet: "10.200.0.0/24", purpose: "WireGuard clients = LAN access" },
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
      "act_runner v0.3.1 on Gitea LXC (10.99.0.22). Push to dev → node:22-alpine container builds Next.js → rsync out/ to Portfolio LXC → SSH docker rebuild. Runner WorkingDirectory=/opt/docker/gitea. Feature branches for daily work; merge to dev to deploy.",
    why: "Keeps the full pipeline internal — no GitHub Actions, no external runners. Build runs in an isolated Alpine container so the Gitea LXC isn't polluted. Portfolio LXC (10.99.0.23) just serves pre-built static files via nginx. Runner must be registered with the LXC IP (10.99.0.22:3000), not localhost — containers can't resolve localhost to the host. The .runner file must live in WorkingDirectory or the daemon crashes on start.",
  },
];

export default function HomelabPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-2">
          lerkolabs
        </p>
        <h1 className="font-mono text-2xl font-bold text-[var(--color-text-light)] mb-4">
          Home Infrastructure Lab
        </h1>
        <p className="text-[var(--color-grey-3)] text-sm leading-relaxed max-w-2xl">
          Personal infrastructure environment for learning, self-hosting, and operational practice.
          Running 24/7 on production-grade hardware with real network segmentation, SSO,
          monitoring, and IaC-style documentation.
        </p>
      </div>

      {/* At a glance */}
      <section className="mb-16" aria-labelledby="glance-heading">
        <h2
          id="glance-heading"
          className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-6"
        >
          At a Glance
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Hypervisor", value: "Proxmox VE" },
            { label: "Firewall", value: "pfSense (Intel N100)" },
            { label: "Switching", value: "TP-Link Omada (managed)" },
            { label: "ISP", value: "AT&T Fiber 1 Gbps" },
            { label: "VPN", value: "WireGuard (pfSense)" },
            { label: "Reverse Proxy", value: "Caddy + Cloudflare DNS-01" },
            { label: "Auth", value: "Authentik SSO" },
            { label: "DNS", value: "Pi-hole → Unbound → Cloudflare" },
            { label: "Containers", value: "9 LXC + 2 VMs" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-[var(--color-grey-1)] rounded-lg p-4 bg-[var(--color-bg)]"
            >
              <p className="font-mono text-xs text-[var(--color-grey-2)] mb-1">{label}</p>
              <p className="font-mono text-sm text-[var(--color-text-light)]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VLAN table */}
      <section className="mb-16" aria-labelledby="network-heading">
        <h2
          id="network-heading"
          className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-6"
        >
          Network — 8 Isolated VLANs
        </h2>
        <p className="text-xs text-[var(--color-grey-3)] mb-4">
          Default deny inter-VLAN policy. Each VLAN has explicit firewall rules for what it can reach.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-grey-1)]">
                <th className="font-mono text-xs text-[var(--color-grey-2)] text-left py-2 pr-4 uppercase tracking-wider">VLAN</th>
                <th className="font-mono text-xs text-[var(--color-grey-2)] text-left py-2 pr-4 uppercase tracking-wider">Name</th>
                <th className="font-mono text-xs text-[var(--color-grey-2)] text-left py-2 pr-4 uppercase tracking-wider">Subnet</th>
                <th className="font-mono text-xs text-[var(--color-grey-2)] text-left py-2 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {vlans.map((v) => (
                <tr key={v.id} className="border-b border-[var(--color-grey-1)] border-opacity-30 hover:bg-[var(--color-bg)] transition-colors">
                  <td className="font-mono text-xs text-[var(--color-green)] py-2.5 pr-4">{v.id}</td>
                  <td className="font-mono text-sm text-[var(--color-text-light)] py-2.5 pr-4">{v.name}</td>
                  <td className="font-mono text-xs text-[var(--color-grey-3)] py-2.5 pr-4">{v.subnet}</td>
                  <td className="text-xs text-[var(--color-grey-3)] py-2.5">{v.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Services */}
      <section className="mb-16" aria-labelledby="services-heading">
        <h2
          id="services-heading"
          className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-6"
        >
          Self-Hosted Services
        </h2>
        <div className="flex flex-col gap-8">
          {categoryOrder.map((cat) => {
            const catServices = services.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="font-mono text-xs text-[var(--color-grey-2)] uppercase tracking-wider mb-3">
                  {categoryLabels[cat]}
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
                  {catServices.map((svc) => (
                    <div
                      key={svc.name}
                      className="flex items-start gap-3 border border-[var(--color-grey-1)] rounded-lg p-4 bg-[var(--color-bg)] hover:border-[var(--color-green-darker)] transition-colors"
                    >
                      <i
                        className={`${svc.icon} text-[var(--color-green)] text-sm mt-0.5 w-4 shrink-0`}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-mono text-xs text-[var(--color-text-light)] mb-0.5">{svc.name}</p>
                        <p className="text-xs text-[var(--color-grey-2)] leading-relaxed">{svc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ADRs */}
      <section className="mb-16" aria-labelledby="adr-heading">
        <h2
          id="adr-heading"
          className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-2"
        >
          Architecture Decisions
        </h2>
        <p className="text-xs text-[var(--color-grey-3)] mb-6">
          Short-form ADRs — why things are configured the way they are.
        </p>
        <div className="flex flex-col gap-5">
          {adrs.map((adr) => (
            <div
              key={adr.title}
              className="border border-[var(--color-grey-1)] rounded-lg p-5 bg-[var(--color-bg)] hover:border-[var(--color-green-darker)] transition-colors"
            >
              <h3 className="font-mono text-sm text-[var(--color-text-light)] mb-2">{adr.title}</h3>
              <p className="text-xs text-[var(--color-grey-3)] leading-relaxed mb-2">
                <span className="text-[var(--color-grey-2)]">Decision: </span>{adr.decision}
              </p>
              <p className="text-xs text-[var(--color-grey-3)] leading-relaxed">
                <span className="text-[var(--color-grey-2)]">Why: </span>{adr.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="border border-[var(--color-grey-1)] rounded-lg p-6 bg-[var(--color-bg)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-[var(--color-text-light)] mb-1">lerkolabs on GitHub</p>
          <p className="text-xs text-[var(--color-grey-3)]">
            Full documentation: VLAN maps, runbooks, service registry, config exports, and setup guides.
          </p>
        </div>
        <a
          href="https://github.com/lerko96/homelab-wip"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-xs px-4 py-2 border border-[var(--color-green-darker)] text-[var(--color-green)] rounded hover:bg-[var(--color-green-darkest)] transition-colors"
        >
          View repo <i className="fas fa-arrow-up-right-from-square ml-1 text-xs" aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
