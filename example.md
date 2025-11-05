---
theme: ./
---

# Slidev Theme Gravitek

Theme for training presentations by Gravitek.

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It
includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible
  in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right 
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---
layout: section
---

# Simple Section

---
layout: section
---

# Simple Section 2

With an complementary paragraph to explain more in detail what you want to say.

---
layout: default
---

# Simple slide example

## H2 Subtitle of the page

An introduction paragraph.

### H3 Title of a block

- Item 1
- Item 2
- Item 3

A classic paragraph to explain more in detail what you want to say.

Another paragraph to add more information.

### Second block

You can also use **Markdown** syntax to create rich text content in your slides.

#### H4 Title for a schema or code block

---
layout: two-cols
layoutClass: gap-8
---

# Two columns example

## First paragraph

- Item 1
- Item 2
- Item 3

## Second paragraph

You can also use **Markdown** syntax to create rich text content in your slides.

::right::

#### H4 Schema title

```mermaid
graph LR;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

#### H4 Code title

```yaml
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-aws-s3
spec:
  package: xpkg.upbound.io/upbound/provider-aws-s3:v1.14.0
  # 🆕 Provider Revisions - manage upgrades safely
  revisionActivationPolicy: Automatic
  revisionHistoryLimit: 3
```

---

# Comparing Pulumi and Crossplane v2
<br>

| Dimension                   | **Pulumi**                                     | **Crossplane v2**                                    |
| --------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| **Paradigm**                | Code-based IaC (imperative)                    | Declarative IaC (Kubernetes-native)                  |
| **Execution Model**         | Executed via CLI/CI pipelines                  | **Continuous reconciliation loop inside Kubernetes** |
| **Target Users**            | Developers & App Teams                         | Platform & Ops Teams                                 |
| **Language Model**          | General-purpose languages (TS, Go, Python, C#) | Kubernetes CRDs & YAML APIs                          |
| **Extensibility**           | SDKs & reusable components                     | XRDs, Compositions & Functions                       |
| **State Management**        | Handled externally (state files, backend)      | Managed by Kubernetes controllers                    |
| **Drift Correction**        | On-demand (reapply / refresh)                  | **Continuous reconciliation (auto-heal)**            |
| **Multi-cloud Strategy**    | Multi-SDK abstraction                          | Multi-cloud via Providers (AWS, GCP, Azure, etc.)    |
| **Self-Service Enablement** | Needs additional API/UI layer                  | **Native — every XRD becomes a self-service API**    |
| **Best Fit For**            | Developer-centric IaC pipelines                | **Platform-centric GitOps & Control Planes**         |

---
layout: two-cols-top
layoutClass: gap-8
---

# 🗓️ Agenda example

::left::

## Day 1
### Foundations & Core Concepts

- **09:00** Introduction & Objectives
- **09:30** Architecture and Key Concepts
- **10:45** Lab 1: Installation & Discovery
- **13:30** Lab 2: Managed Resources
- **15:15** Compositions & XRD
- **17:00** Q&A / Day 1 Recap

::right::

## Day 2
### Extending & Automating

- **09:00** Morning Recap & Q/A
- **09:30** Composition Functions & Pipelines
- **11:15** Lab 3: Multi-Resource Composition
- **13:30** GitOps Integration (ArgoCD/Flux)
- **15:15** Observability & Troubleshooting
- **16:30** Closing & Perspectives

---
layout: center 
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) /
[GitHub Repo](https://github.com/slidevjs/slidev)
