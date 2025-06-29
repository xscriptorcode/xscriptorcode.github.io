import { Timeline } from "@/app/components/timeline";
//import { PagesStyles } from "./pagesstyles";

export function PortfolioTimeline() {
  const data = [
    {
      title: "2014",
      content: (
        <div>
          <p className="text-neutral-300 mb-4">IT jr analist — Prever S.A.S.</p>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li>
              ✔ Complete Windows and Linux servers management
              <ul className="list-disc pl-5 mt-1">
                <li>
                  ▲ Credentials management
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      Centralized user and group control (Active Directory,
                      LDAP)
                    </li>
                    <li>Role-based access control (RBAC)</li>
                    <li>SSH key management and rotation</li>
                    <li>
                      Password policy enforcement (complexity, expiration)
                    </li>
                  </ul>
                </li>
                <li>
                  ▲ Information security
                  <ul className="list-disc pl-5 mt-1">
                    <li>Regular OS patching and vulnerability management</li>
                    <li>Firewall configuration and port hardening</li>
                    <li>
                      Log auditing and centralized monitoring (e.g., Graylog,
                      ELK)
                    </li>
                  </ul>
                </li>
                <li>
                  ▲ Connectivity and networking
                  <ul className="list-disc pl-5 mt-1">
                    <li>Static IP/DNS setup and DHCP reservation</li>
                    <li>
                      VPN server setup and maintenance (WireGuard, OpenVPN)
                    </li>
                    <li>Port forwarding and NAT configuration</li>
                    <li>Remote desktop and SSH access provisioning</li>
                    <li>Network file sharing (SMB/NFS)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li>
              ✔ Database administration and migration to Odoo (formerly OpenERP)
              <ul className="list-disc pl-5 mt-1">
                <li>
                  ▲ Legacy database administration (PostgreSQL, MySQL,
                  Oracle...)
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      Installation, configuration, and user access control
                    </li>
                    <li>Backup routines and replication strategies</li>
                    <li>Data normalization and structure analysis</li>
                  </ul>
                </li>
                <li>
                  ▲ Migration process toward Odoo
                  <ul className="list-disc pl-5 mt-1">
                    <li>Assessment of legacy systems and ERP alternatives</li>
                    <li>Mapping fields and cleansing inconsistent data</li>
                    <li>
                      Exporting and transforming datasets to fit Odoo schemas
                    </li>
                  </ul>
                </li>
                <li>
                  ▲ Odoo deployment and data integration
                  <ul className="list-disc pl-5 mt-1">
                    <li>Setting up Odoo with PostgreSQL as the backend</li>
                    <li>Installing essential and custom business modules</li>
                    <li>Importing data via CSV, XML or direct SQL scripts</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-300 mb-4">
            Financial Portfolio Manager (NYSE/NASDAQ) — Liquidity Hub
          </p>
          <ul className="list-disc pl-5 mt-1 text-sm text-neutral-400">
            <li>
              ▲ Big Data and financial analytics
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Real-time aggregation of market feeds and historical data
                </li>
                <li>
                  Preprocessing of large-scale datasets using Python (Pandas,
                  NumPy)
                </li>
                <li>
                  Integration with financial APIs (Bloomberg, Alpha Vantage,
                  Yahoo Finance)
                </li>
                <li>
                  Machine learning models for risk prediction and asset
                  correlation
                </li>
              </ul>
            </li>
            <li>
              ▲ Graphical data interpretation
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Technical chart reading (candlesticks, RSI, MACD, Bollinger
                  Bands)
                </li>
                <li>
                  Development of custom dashboards with D3.js, Plotly or Power
                  BI
                </li>
                <li>
                  Visualization of price-volume anomalies and trend reversals
                </li>
              </ul>
            </li>
            <li>
              ▲ Market perspective & forecasting
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Macro and microeconomic impact analysis on portfolio exposure
                </li>
                <li>
                  Scenario modeling for volatility shifts and liquidity events
                </li>
                <li>
                  Sentiment analysis based on financial news and earnings
                  reports
                </li>
              </ul>
            </li>
            <li>
              ▲ Confidential data governance
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Secure storage and encryption of portfolio allocation data
                </li>
                <li>
                  Access control and role-based audit trails (GDPR/SEC
                  compliant)
                </li>
                <li>
                  Versioning and traceability of sensitive trading decisions
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-300 mb-4">
            Telecommunications Analyst — Telefónica
          </p>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li>
              ▲ Troubleshooting and signal diagnostics
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Detection and resolution of incidents on landline and mobile
                  networks
                </li>
                <li>
                  Real-time analysis of signal degradation and restoration of
                  service
                </li>
                <li>
                  Remote signal testing and escalation of unresolved issues
                </li>
              </ul>
            </li>
            <li>
              ▲ Customer data and database administration
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Query, update, and validation of customer data in internal
                  systems
                </li>
                <li>
                  Creation and deletion of service records with consistency
                  checks
                </li>
                <li>
                  Maintenance of backend telecom databases (SQL-based tools)
                </li>
              </ul>
            </li>
            <li>
              ▲ Signal routing and service provisioning
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Configuration of routing tables and signal paths for new
                  connections
                </li>
                <li>Activation and monitoring of voice and data plans</li>
                <li>
                  Coordination with infrastructure teams for physical line
                  deployment
                </li>
              </ul>
            </li>
            <li>
              ▲ Security and compliance checks
              <ul className="list-disc pl-5 mt-1">
                <li>Routine security audits on customer-accessible systems</li>
                <li>
                  Verification of user permissions and protection of sensitive
                  data
                </li>
                <li>
                  Compliance with Telefónica&rsquo;s data handling and privacy
                  protocols
                </li>
              </ul>
            </li>
            <li>
              ▲ Product testing and reporting
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Functional validation of new telecom products before public
                  release
                </li>
                <li>
                  Reporting bugs and inconsistencies across different user
                  environments
                </li>
                <li>Feedback to R&D for iterative product improvements</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Present",
      content: (
        <div>
          <h1 className="text-yellow-200">X development</h1>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-sm md:text-base space-y-2">
            <li>
              Completed an{" "}
              <strong>
                Advanced Technical Degree in Web Application Development
              </strong>
              , focused on frontend, backend, databases, and cross-platform
              apps.
            </li>
            <li>
              Earned a certification from the{" "}
              <strong>Universitat Autònoma de Barcelona</strong> in Digital
              Humanities.
            </li>
            <li>
              Earned certifications from <strong>Google</strong> in IT Security
              and Technical Support Fundamentals.
            </li>
            <li>
              Earned multiple certifications on <strong>Coursera</strong> and{" "}
              <strong>OpenWebinars</strong> in React, web security, backend
              development, project management, CSS, Tailwind, and JavaScript.
            </li>
            <li>
              Worked as a <strong>freelance web administrator</strong>,
              maintaining and optimizing websites for small businesses.
            </li>
            <li>
              Another projects development: <strong>Xscriptor — Xliterato — Xscriptorcode{""}</strong>,
              art literature and programming portfolios.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
