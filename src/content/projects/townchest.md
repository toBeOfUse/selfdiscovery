---
title: Townchest
live_link: https://townchest.com/
date: Summer 2024 - Now
image: /townchest.jpg
description: My work on a new online marketplace platform.
---

Townchest is an online shopping platform being developed by the venture-backed startup Enbasis, Inc. It works like this: community groups and nonprofits create fundraisers on Townchest; people who want to support those groups make purchases; and some of the money from those purchases goes back to the groups that created the fundraisers. I joined the project shortly after it received Series A funding in spring 2024, and became the first full-time, full-stack developer to be tasked with consolidating the raw materials that had been created for early demos into a fully-functional online marketplace and fundraising platform.

Working on Townchest has been a journey. On the frontend, I created new versions of critical parts of the site, like a Stripe-based checkout page, a streamlined onboarding flow for adding groups to the platform, and a modern product search page with sorting and filtering; on the backend, I restructured our code and took it from the somewhat ad-hoc approach that had been used during initial exploratory development towards a modular monolith that breaks the business logic of groups and fundraisers down into encapsulated services.

Developing a new product at a startup is a process of constant re-imagining and exploration. Over the course of the project, we've worked on integrations with four different online e-commerce platforms, including Shopify; I started and led the implementation and integration of the one that has become our core e-commerce engine, [Vendure](https://vendure.io/), to which I became [a small contributor](https://github.com/vendure-ecommerce/vendure/commits/master/?author=toBeOfUse). I also ended up creating a fork of the Supabase CLI to address an issue we were having with it and eventually contributing [the final fix](https://github.com/supabase/cli/pull/3119) for the issue myself, despite not knowing Go at the time. I have also learned a lot about how to use Vercel, MUI, Storybook, Next.js, Payload CMS, TanStack Query, GraphQL, AWS (S3, ECS, RDS, Route 53, and API Gateway), and OAuth. My title on the team is currently Staff Full-Stack Engineer and Lead Technical Architect.
