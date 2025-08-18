Milestone 1 – Frontend Only (No Backend, backend is replaced with blockchain logic that feeds front end via The Graph (Subgraph): indexes contract events so the site can load balances/history fast.

Goal: Deliver full user-facing website + dashboards with mock data only. Focus is on design, flow, and clarity.  smart contracts come later.

Static Pages (5 core pages):
	1.	Home Page – Branding at top (ARKCARBON logo, tagline). Hero section with CTA (“Offset My Footprint”). Short explainer: What is ARKCarbon, How it Works (3 steps: Buy → Redeem → See Impact). Global counters (tons CO₂ offset, ARK burned, projects funded). Footer with links.
	2.	About/Carbon Credits – Explains what carbon credits are, why important, simple diagram.
	3.	About/ARKCoin – What ARKCoin is, how it works, difference from credits, utility explanation.
	4.	Projects Page – Static cards showing example green projects, plus a “Submit Your Project” form (mock, sends nowhere for now).
	5.	FAQ + Legal Pages – FAQs, Privacy Policy, Terms of Use (static text).

Dashboard (Individuals):
Structured in 3 clear blocks:
	1.	Wallet Block – ARKCoin balance, current ARK price in USD, Buy ARKCOIN button (3 tabs: USDC, Swap, P2P).
	2.	Impact Block – Redeem/Offset button (burn), Lifetime CO₂ Calculator (based on birthday → shows cumulative emissions), Auto-Offset Subscription options ($7, $25, $75/month – mock only), Impact counter (tons offset).
	3.	History Block – Table with full-width rows: Date, Action (Buy/Offset), Amount, Status, Certificate link. Top line shows total offset so far.

Business Dashboard – Same 3-block structure, just adapted for organizations.

Why No Backend:
– Purpose of M1 is UI/UX approval. We don’t need database, server, or live blockchain at this stage.
– All data (balances, price, history) shown with mock JSON so user flow feels real.
– Developer just needs to build static + interactive components (modals, charts, forms).
– In Milestone 2 (Smart Contracts) and Milestone 3 (Integration),  blockchain replace mocks with real logic.
– This phased approach prevents rework: we first finalize look & flow, then connect to live contracts later.

Definition of Done:
– All 5 static pages live.
– Individual + Business dashboards functional with mock flows.
– Fully responsive, clear branding, intuitive navigation.
– Staging site deployed for review
