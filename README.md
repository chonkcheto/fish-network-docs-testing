# Fish Network At a Glance

### One-liner

A compliant, semi-liquid platform that turns thesis-driven investment clubs (“Fish Schools”) into software-enabled micro-funds with shared liquidity coordination and explicit liquidity pricing.

***

### What’s different

Fish Network replaces deal-by-deal syndicates and pay-to-list portals with:

* **Up-front pooled capital** (known deployable capital, faster execution)
* **Community diligence + on-chain voting** (transparent, member-driven decisioning)
* **Shared liquidity coordination across schools**, with structured redemption windows and a roadmap to synthetic exposure
* **Streamlined administration** via KYC/KYB, qualified custody, identity primitives, and standardized legal rails

***

### What is a Fish School?

A **Fish School** is a thesis-driven investment club (typically a **Series LLC**) where members collectively contribute **capital and participation (time, insight, diligence)** to evaluate opportunities and vote on deployments under agreed governance rules.

***

### Problem

* Crowdfunding portals are **costly, pay-to-list, and low-touch** after matching.
* Investors struggle to make informed decisions and face **long, uncertain liquidity**.
* High-quality issuers avoid portals due to fees and ongoing compliance burdens, creating **adverse selection**.

***

### Solution Overview

* Organize investors into **Fish Schools** run by vetted Organizers, with **pooled capital** and **on-chain governance**.
* Provide **structured redemption windows** and coordinated liquidity across schools, rather than forcing asset sales.
* Reduce admin friction via **integrated identity + compliance** (KYC/KYB, qualified custody, identity primitives).

_Placement note: Insert Base / Coinbase / Kraken logos with 1-sentence proof points (execution layer, custody, identity/KYC)._

***

### Roles (Who does what)

#### 🐟 Fish (Investor)

* **Who:** Individuals or entities joining a Fish School
* **Responsibilities:** Commit capital, participate in diligence, vote on governance and investments, follow school rules
* **Incentives:** Fish Points (reputation), exposure to curated deals, ability to rotate across schools over time, structured redemption optionality
* **Requirements:** KYC, agreement to club docs; wallet + identity (e.g., cb.id / ENS)

#### 🎣 Fish School Organizer (Emerging Manager / Lead)

* **Who:** Vetted lead for a specific thesis or school
* **Responsibilities:** Form and operate the Series LLC, coordinate onboarding, source and vet deals, run votes, manage reporting, interface with custody and compliance partners, coordinate distributions
* **Incentives:** Administrative fees approved under school rules; reputation accrual; performance-aligned incentives only where permitted and structured to preserve investment-club posture
* **Requirements:** Diligence standards, transparent reporting, adherence to investment-club constraints

#### 🐠 Shoal Leader (VC or B2B Entity)

* **Who:** Multi-school coordinator overseeing a “Shoal” (sector, region, or ecosystem programs)
* **Responsibilities:** Recruit and coach Organizers, enforce quality and compliance standards, provide shared services (deal flow, ops, BD), run funnel-wide programs
* **Incentives:** Program fees or platform economics (where applicable), brand and community expansion, capital routing to top-performing Organizers, LP engagement

#### 🌊 Fish Network (Platform / Protocol Layer)

* **What:** Shared rails for identity gating, custody routing, escrow logic, reputation, liquidity coordination, discovery, and analytics
* **Responsibilities:** Provide routing contracts, scorekeeping (Fish Points), dashboards, compliance tooling, and redemption/liquidity mechanisms
* **Incentives:** Network fees, volume growth, and ecosystem health

***

### How It Works (Structure • Coordination • Direction)

#### Capital structure options (by school configuration)

**CURRENT MODEL — “80/20 Micro-Fund” (points + front-loaded admin fees)**

**Use Cases:** Investment Clubs and SPVs as Fish Schools; capital is raised prior to deployment.

* Best for: early pilots, fast launches, low complexity
* **≥80%** deployed to investments
* **≤20%** for admin/ops and early execution costs (front-loaded)

**Future Use Case:** Rolling "funds" as investment clubs

#### Standard flow (investor onboarding journey)

1. Fish commits capital → KYC/KYB → custody/escrow initialized
2. Organizer curates opportunities → community diligence + Q\&A → on-chain vote
3. Funds routed per school rules and split → startup(s) funded
4. On liquidity events: proceeds returned (typically converted to USDC) → smart contracts update balances, records, and Fish Points
5. Optional redemptions occur only during defined windows and subject to school lockups and fees

***

### Fees & Liquidity

#### Liquidity Premium (Default: 5%)

* Fish Network may apply a **Liquidity Premium of 5%** to capital contributions across Fish Schools.
* This premium is **automatically routed on-chain to the Fish LP Contract**, a protocol-level liquidity reserve. This capital is locked; however, it remains beneficially owned by the Fish School and can be distributed to members upon liquidation of the Fish School's assets.
* Purpose:
  * bootstrap shared liquidity and network TVL,
  * support coordinated redemptions across schools,
  * reduce reliance on forced asset sales.
* The Liquidity Premium may be **mandatory or higher** for:
  * Fish Schools launched **off-platform**, and/or
  * Fish Schools operating **outside the United States**.

Liquidity Premium capital does **not** represent ownership in any single Fish School portfolio; it contributes to network-wide liquidity support.

#### Liquidity Haircuts (Future / Conditional)

* Fish Network may apply a **one-time Liquidity Haircut (anticipated range: 5–20%)** to Fish Schools in the future.
* Haircuts would be routed to the **FishLP Contract** to reinforce shared liquidity and network resilience.
* Any haircut would be disclosed in advance where possible and applied transparently via on-chain routing.

#### Other Liquidity Terms

* **Lockups:** Default includes at least a 3-week notice/redemption window; some schools may set longer lockups (up to 1 year) if disclosed.
* **Shared liquidity roadmap:** Cross-school coordination and future synthetic exposure to reduce lockup pain without forcing asset sales.
* **Distributions:** Organizer coordinates share-to-USDC conversions; smart contracts maintain records and pro-rata calculations.

***

### Governance & Compliance (High-Level)

* **Entity:** Series LLC per school (investment club model) with standardized documents
* **Participation:** No passive members—members must vote and participate or face penalties/removal
* **Identity:** KYC (Fish) / KYB (School) via integrated identity providers; identity gating for voting and access
* **Custody & escrow:** Qualified custodians (e.g., Coinbase Prime / Kraken) plus routing contracts and optional 21-day escrow cycles
* **Records:** Audit trails for votes, distributions, and redemptions; compliance tooling to support reporting

***

### Tech Stack

* **Base L2** for low-cost on-chain voting, routing, and transparency
* **Routing contracts** for escrow, split logic, liquidity routing, and distribution accounting
* **Reputation:** Fish Points as non-transferable reputation with dashboards for contribution and performance history
* **Agentic AI layer (optional):** Voice, Q\&A, and social agents to reduce friction and increase participation while preserving explicit user consent for votes

***

### Use Cases

* **Emerging manager bootstrapping (Organizer):** Launch a thesis school; convert community into deployable, semi-liquid capital
* **VC platform (Shoal Leader):** Run a multi-manager program; activate smaller checks; syndicate follow-ons; build an on-chain track record layer
* **Ecosystem funds / B2B:** Corporate or protocol-aligned schools to fund partner ecosystems and recruit builders

***

### Roadmap / Next Steps

* Fund-of-Funds smart contract for diversified exposure across schools and improved liquidity support
* Broker-Dealer / Funding Portal path: partner or acquire if/when necessary to expand regulated distribution
* Governance maturity: seed-round board selection and formal oversight structures

***

### Risks & Mitigations

* **Regulatory clarity:** Pre-vetted club docs; escalation path via BD/portal partnerships where required
* **Liquidity pricing risk:** Liquidity Premiums or Liquidity Haircuts may reduce deployable capital in exchange for network-level liquidity support
* **Liquidity bootstrapping:** Seed liquidity facility; Open General Contract; FoF to smooth flows
* **Manager quality:** Rigorous Organizer vetting; Shoal Leader QA; standardized diligence and reporting
