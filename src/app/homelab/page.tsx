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
  {
    id: "MGMT",
    name: "MGMT",
    purpose: "Network equipment only",
  },
  {
    id: "LAN",
    name: "LAN",
    purpose: "Trusted personal devices",
  },
  {
    id: "Lab",
    name: "Homelab",
    purpose: "All self-hosted services",
  },
  {
    id: "Guest",
    name: "Guests",
    purpose: "Internet only, RFC1918 blocked",
  },
  {
    id: "IoT",
    name: "IoT",
    purpose: "Smart home, isolated",
  },
  {
    id: "WFH",
    name: "WFH",
    purpose: "Work devices, no personal access",
  },
  {
    id: "DMZ",
    name: "DMZ",
    purpose: "Public-facing, hard-blocked internally",
  },
  {
    id: "VPN",
    name: "VPN",
    purpose: "WireGuard clients, LAN-equivalent access",
  },
];

const adrs = [
  {
    title: "ISP gateway: passthrough mode",
    decision:
      "ISP gateway stays in-line in passthrough mode, pfSense gets the public IP directly. Gateway WiFi disabled.",
    why: "Carrier locks 802.1X auth to their own gateway hardware, and bypassing it is brittle — breaks on firmware updates and only saves a millisecond or two. True bridge mode isn't supported. Passthrough is the cleanest option that keeps pfSense as the actual perimeter.",
  },
  {
    title: "Caddy over NGINX Proxy Manager",
    decision:
      "Caddy with DNS-01 challenge via Cloudflare API. All subdomains resolve to Caddy internally via Pi-hole. Caddy terminates TLS and proxies to backends.",
    why: "Single Caddyfile, automatic certs without ever needing to expose internal services to the internet for an HTTP-01 challenge. NPM has more UI overhead for the same outcome. Traefik is more complex for no benefit at this scale.",
  },
  {
    title: "WireGuard over OpenVPN",
    decision:
      "WireGuard on pfSense as the only remote-access path. Clients get the access tier documented in the access model — same as LAN, plus the admin surfaces that aren't reachable any other way.",
    why: "Faster, simpler config, better battery life on mobile. Throughput on the firewall hardware comfortably exceeds the WAN link. OpenVPN has no advantage here. Tailscale would add an external relay dependency for a problem WireGuard already solves.",
  },
  {
    title: "Pi-hole in Homelab VLAN, not MGMT",
    decision:
      "Pi-hole runs in the Homelab VLAN. Firewall allows port 53 inbound from VLANs that need local resolution. MGMT uses pfSense Unbound as its primary resolver instead.",
    why: "Putting Pi-hole in MGMT would mean opening MGMT to all the VLANs that need DNS — much bigger attack surface for the most sensitive tier. DNS traffic crossing into the Homelab VLAN is the lesser risk, and Homelab is already where service traffic terminates anyway.",
  },
  {
    title: "Mini-PC for pfSense",
    decision:
      "Intel N100 mini-PC as the firewall host. ~6W idle, handles multi-Gbps routing, saturates the WAN link with WireGuard headroom to spare.",
    why: "Right-sized for 1 Gbps fiber. A Raspberry Pi can't handle 1 Gbps plus VPN. A full rack server wastes power for this role and adds noise to a room I sit in.",
  },
  {
    title: "Shared Postgres + Redis in apps LXC",
    decision:
      "One Postgres instance hosting multiple databases. One Redis instance. A single init script provisions schemas on first run.",
    why: "Avoids ~15 separate DB containers. Big RAM savings. Productivity apps colocate in one LXC anyway, so a shared backing store there is the natural shape.",
  },
  {
    title:
      "Gitea CI/CD: self-hosted runner, internal pipeline, static deploy",
    decision:
      "Self-hosted Gitea Actions runner builds the portfolio on push, then deploys pre-built static files to the public-facing host. Build runs in an isolated container so the runner host stays clean. Public host serves static files only — no build toolchain on it.",
    why: "Keeps the whole pipeline internal. No external runners, no GitHub Actions. The build/serve split means the public-facing host has the smallest possible footprint — static file server, nothing more.",
  },
  {
    title: "Authentik over Authelia",
    decision: "Authentik as the SSO provider across all self-hosted services.",
    why: "Full OIDC provider + forward auth in one. Lets services like Outline, Gitea, and Vikunja use real SSO rather than just a login gate. Authelia is forward-auth only — no OIDC provider capability.",
  },
];

export default function HomelabPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-4lh">
        <p className="font-mono text-sm font-bold text-[var(--color-text)] mb-1lh">
          <span
            className="text-[var(--color-accent-green)] select-none mr-1ch"
            aria-hidden="true"
          >
            ❯
          </span>
          homelab
        </p>
        <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed max-w-2xl opacity-80">
          Personal infrastructure environment for learning, self-hosting, and
          operational practice. Running 24/7 on production-grade hardware with
          real network segmentation, SSO, monitoring, and IaC-style
          documentation.
        </p>
      </div>

      {/* At a Glance */}
      <Widget title="homelab/overview" badge={glanceStats.length} as="section">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {glanceStats.map(({ label, value }) => (
            <div key={label} className="bg-[var(--color-surface)] px-2ch py-half-lh">
              <p className="font-mono text-sm text-[var(--color-text-dim)] mb-half-lh">
                {label}
              </p>
              <p className="font-mono text-sm text-[var(--color-text)]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </Widget>

      {/* VLAN table */}
      <Widget
        title="homelab/network"
        meta="8 isolated vlans · default deny inter-vlan"
        as="section"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="font-mono text-[var(--color-text-dim)] text-left py-qtr-lh pr-[3ch] uppercase">
                  VLAN
                </th>
                <th className="font-mono text-[var(--color-text-dim)] text-left py-qtr-lh pr-[3ch] uppercase">
                  Name
                </th>
                <th className="font-mono text-[var(--color-text-dim)] text-left py-qtr-lh uppercase">
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
                  <td className="font-mono text-[var(--color-accent-green)] py-half-lh pr-[3ch]">
                    {v.id}
                  </td>
                  <td className="font-mono text-[var(--color-text)] py-half-lh pr-[3ch]">
                    {v.name}
                  </td>
                  <td className="font-mono text-sm text-[var(--color-text)] py-2.5 opacity-80">
                    {v.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Widget>

      {/* Services */}
      <Widget title="homelab/services" badge={services.length} as="section">
        <div className="flex flex-col gap-3ch">
          {categoryOrder.map((cat) => {
            const catServices = services.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <p className="font-mono text-sm text-[var(--color-text-dim)] mb-1lh">
                  {categoryLabels[cat]}
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)]">
                  {catServices.map((svc) => (
                    <div
                      key={svc.name}
                      className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-raised)] flex items-start gap-1ch px-2ch py-half-lh"
                    >
                      <i
                        className={`${svc.icon} text-[var(--color-text-label)] text-xs mt-0.5 w-3.5 shrink-0`}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-mono text-sm text-[var(--color-text)] mb-0.5">
                          {svc.name}
                        </p>
                        <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed opacity-75">
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
        title="homelab/ADRs"
        meta="why things are configured the way they are"
        badge={adrs.length}
        as="section"
      >
        <div className="flex flex-col gap-px bg-[var(--color-border)]">
          {adrs.map((adr) => (
            <div
              key={adr.title}
              className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-raised)] px-2ch py-1lh"
            >
              <p className="font-mono text-sm text-[var(--color-text)] mb-1lh">
                {adr.title}
              </p>
              <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed mb-half-lh opacity-75">
                <span className="text-[var(--color-text-label)] opacity-100">
                  decision:{" "}
                </span>
                {adr.decision}
              </p>
              <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed opacity-75">
                <span className="text-[var(--color-text-label)] opacity-100">
                  why:{" "}
                </span>
                {adr.why}
              </p>
            </div>
          ))}
        </div>
      </Widget>

      {/* Gitea CTA */}
      <section className="pt-qtr-lh">
        <p className="font-mono text-sm text-[var(--color-text-dim)] mb-half-lh">
          homelab/docs
        </p>
        <p className="font-mono text-sm text-[var(--color-text)] mb-1lh opacity-75">
          VLAN maps, runbooks, service registry, config exports, and setup
          guides.
        </p>
        <a
          href="https://gitea.lerkolabs.com/lerko/homelab"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
        >
          ↗ gitea.lerkolabs.com/lerko/homelab
        </a>
      </section>
    </>
  );
}
