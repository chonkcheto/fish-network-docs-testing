---
title: System and Method for Blockchain-Based Community Investment Pools
description: Inventors Assignee - Fish Network, Inc. (Delaware, USA) Filing Jurisdiction - USPTO Provisional
---

# System and Method for Blockchain-Based Community Investment Pools

## Abstract

A computerized, blockchain-native platform enabling verified investors to form and operate legally compliant, pre-funded, community-governed investment pools ("Fish Schools"). Each Fish School deploys a permissioned smart-contract suite to (i) escrow and time-lock pooled digital assets and/or fiat-rail contributions, (ii) issue non-transferable reputation tokens that weight governance, (iii) conduct on-chain voting with optional AI-assisted interfaces that preserve individual consent, and (iv) automatically deploy capital into startups or special purpose vehicles ("SPVs") using voting-enabled CrowdSAFE instruments. The platform integrates investor verification, qualified custody/banking partners, on-chain attestations, nominee-delegate execution, and staged disbursement rules to ensure regulatory compliance, transparent fund flow, and rapid execution across the full startup lifecycle.

## Field of the Invention

The invention relates to financial technology, decentralized governance, and blockchain systems. More particularly, it concerns systems and methods for forming and managing community investment clubs and SPVs using smart contracts, reputation-weighted voting, compliance-gated participation, custody/banking integration, and automated execution of investment contracts such as a voting-enabled CrowdSAFE.

## Background

Crowdfunding platforms, syndicates, and venture funds typically rely on centralized intermediaries for compliance, custody, governance, and capital deployment. These systems are slow, opaque, fee-heavy, and concentrate decision-making power in organizers or large token holders. Traditional DAO governance using transferable tokens is vulnerable to whale capture and Sybil manipulation. Further, SAFE/CrowdSAFE instruments do not natively support community voting, nominee-delegate coordination, or on-chain record-keeping necessary to preserve investment-club legal status. There is therefore a need for an end-to-end, compliance-aligned, community-governed investment infrastructure that automates pooled capital management, voting, custody/banking, and contract execution while retaining person-by-person consent.

## Summary of the Invention

The disclosed invention provides an integrated on-chain investment club and SPV infrastructure comprising:

1. **Pre-Funded Fish Schools:** Verified investors commit capital to a pool governed by smart contracts. Capital is escrowed under programmable lock periods and disbursement ratios.

2. **Compliance-Gated Participation:** Investors complete KYC/KYB and, where required, accreditation checks through regulated partners. Verification is represented as non-transferable on-chain attestations. Only attested wallets or verified banking identities can contribute or vote.

3. **Reputation-Based Governance:** The system mints non-transferable "Fish Points" to verified participants based on contributions, voting activity, and post-investment performance. Fish Points decay over time and can be penalized for gaming behaviors. Governance modules snapshot Fish Points to weight voting outcomes.

4. **Voting-Enabled CrowdSAFE / SPV Execution:** Upon a successful community vote, the system forms or activates an SPV (or investment-club nominee) and deploys capital using a modified CrowdSAFE that grants beneficial owners consultative voting rights via a Nominee Delegate reflecting the Fish School vote.

5. **AI-Assisted but Individually Signed Voting:** A "Fish AI Agent" summarizes proposals, converts natural-language intent into vote transactions, and supports opt-in rule-based assistance; however, each vote requires explicit user confirmation and is signed by the investor's wallet.

6. **Qualified Custody and/or Banking Integration:** Capital is held or routed through qualified custodians or banking partners with multi-signature or equivalent authorization linked to the smart contracts. Automated compliance modules generate regulatory logs and reporting artifacts.

Together these components enable transparent, rapid, thesis-driven community investing from deposit through exit, while preserving legal separateness of club members, individual voting, compliant custody/banking, and enforceable nominee execution.

---

## Detailed Description

### 1. System Overview

The platform comprises an **Investor Interface Layer**, a **Permissioned Smart-Contract Network**, **Compliance and Attestation Gateways**, **Custody/Banking Interfaces**, and optional **Oracles and AI Interaction Modules**.

In one embodiment, the platform operates across vertical-specific Fish Schools (e.g., Web3/AI venture, life sciences venture, real estate, or other assets) while maintaining a consistent compliance-gated and reputation-weighted governance core.

#### 1.1 Investor Interface Layer

Investors access web/mobile applications to:

- complete identity and accreditation verification
- connect and attest a wallet and/or validated banking identity
- contribute capital (digital assets or fiat rails)
- review proposals and diligence materials
- participate in governance directly or via AI assistance
- view real-time cap tables, reputation tiering, treasury allocations, and portfolio status

#### 1.2 Permissioned Smart-Contract Suite

A non-limiting example includes:

- **FishSchool.sol** – creates and registers Fish Schools, stores pool thesis/rules, tracks members, and anchors governance
- **FishEscrow.sol** – receives contributions, enforces programmable lock periods, and issues escrow-receipt tokens
- **FishPoints.sol** – mints non-transferable Fish Points and applies accrual/decay/penalty logic
- **FishGovernance.sol** – manages proposals, quorum, vote snapshots, and Fish-Points weighting
- **FishCustodyBridge.sol** – generates custodian/banking release instructions requiring multi-sig or equivalent authorization
- **FishCrowdSAFE.sol** – instantiates a voting-enabled CrowdSAFE with nominee-delegate hooks
- **FishSPVFactory.sol** – deploys SPV entities or deal-series structures after vote approval

#### 1.3 Compliance and Identity Attestation

The system integrates off-chain verification providers (e.g., KYC/KYB/accreditation APIs). When verification succeeds:

- an **Attestation Contract** mints a non-transferable credential token to the investor wallet
- FishSchool and FishEscrow check for credential presence before deposits or votes
- credential data may encode jurisdictional eligibility, investor class, or sanctions status

#### 1.4 Qualified Custody / Banking

Capital may be held by qualified custodians and/or verified banking partners while remaining programmatically controlled by Fish School governance. The custody bridge requests escrow or release based on vote outcomes, and the custodian/banking partner executes transfers only after required multi-party authorization.

---

### Key Components

1. **Fish School Formation and Capital Locking**: Verification, deposit, time-lock, pool accounting, and reputation minting
2. **Treasury Allocation**: Automated allocation of liquidity reserves and operational funding
3. **Reputation-Weighted Governance**: Proposal submission, diligence, vote snapshots, and quorum approval
4. **Fish Points System**: Non-transferable reputation tokens with accrual, decay, and anti-gaming mechanisms
5. **Nominee Structure**: Legal framework preserving investor voting rights while streamlining execution
6. **SPV Formation**: Multiple pathways for capital deployment and follow-on investments
7. **AI-Assisted Voting**: Optional Fish AI Agent for proposal summaries while preserving individual consent

---

## Advantages

- **Compliance-aligned pooling**: investor gating, attestations, and custody/banking preserve investment-club/SPV legality
- **Merit-weighted governance**: Fish Points prevent whale capture and reward real participation
- **Rapid deal execution**: Automated pipeline from proposal-to-close
- **Customizable Capital Pools**: Ability to configure private market portfolio diversification strategies
- **Transparent fund flow**: Auditable treasury/escrow/disbursement routing
- **Broad applicability**: Both B2C lifecycle and B2B ecosystem deployments
- **Higher participation**: AI lowers friction while preserving individual consent

---

## Patent Status

**Inventors:** Fish Network Team  
**Assignee:** Fish Network, Inc. (Delaware, USA)  
**Filing Jurisdiction:** USPTO – Provisional  

This system and method represents a novel approach to blockchain-based community investment infrastructure, combining compliance, governance, and automation in a unique technical framework.

---

*For technical specifications, implementation details, and integration documentation, please contact the Fish Network engineering team or visit the developer portal.*

