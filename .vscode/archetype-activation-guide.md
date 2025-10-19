# Archetype Activation Guide

## Overview

This system now includes **12 specialized archetypes** divided into two categories:

### Software Development Archetypes (General)
1. **Planner** - Task breakdown and planning
2. **Implementer** - Code implementation
3. **Reviewer** - Code review and quality assurance

### Data Engineering Archetypes (Specialized)
4. **SQL Query Crafter** - Snowflake SQL optimization
5. **Transformation Alchemist** - PySpark/Scala ETL pipelines
6. **Pipeline Builder** - Data ingestion with retry logic
7. **Quality Guardian** - Data quality validation
8. **Performance Tuner** - Query and Spark optimization
9. **Pipeline Orchestrator** - Airflow/workflow scheduling
10. **Automation Scripter** - Bash/PowerShell automation
11. **Documentation Evangelist** - Technical documentation
12. **Integration Specialist** - API and external integrations

---

## Automatic Archetype Selection

GitHub Copilot can **automatically** select the best archetype(s) based on your request. The system looks for specific keywords and patterns:

### Activation Keywords

| **Archetype** | **Trigger Keywords** | **Example Request** |
|---------------|---------------------|---------------------|
| **Planner** | "plan", "break down", "tasks", "roadmap" | "Plan a user authentication feature" |
| **Implementer** | "implement", "build", "create", "code" | "Implement the login function" |
| **Reviewer** | "review", "check", "analyze", "audit" | "Review this code for security issues" |
| **SQL Query Crafter** | "SELECT", "JOIN", "CTE", "Snowflake", "QUALIFY" | "Write a SQL query to deduplicate records" |
| **Transformation Alchemist** | "PySpark", "DataFrame", "Delta Lake", "SCD", "ETL" | "Create a PySpark SCD Type 2 pipeline" |
| **Pipeline Builder** | "ingest", "merge", "incremental", "retry logic" | "Build a data ingestion pipeline with retry" |
| **Quality Guardian** | "data quality", "validation", "Great Expectations", "Deequ" | "Add data quality checks to this pipeline" |
| **Performance Tuner** | "optimize", "slow query", "performance", "EXPLAIN" | "Optimize this slow Snowflake query" |
| **Pipeline Orchestrator** | "Airflow", "DAG", "schedule", "workflow" | "Create an Airflow DAG for this pipeline" |
| **Automation Scripter** | "bash", "script", "automate", "cron" | "Write a bash script to backup files" |
| **Documentation Evangelist** | "document", "README", "diagram", "explain" | "Document this data pipeline" |
| **Integration Specialist** | "API", "REST", "webhook", "integration" | "Create a REST API endpoint for this data" |

---

## Using Archetypes with Copilot

### Method 1: Explicit Archetype Request

Specify the archetype you want:

```
@workspace
Act as [Archetype Name] from .vscode/archetypes/[archetype-file].md

[Your specific task]
```

**Example:**
```
@workspace
Act as SQL Query Crafter from .vscode/archetypes/sql-query-crafter.md

Write a query to calculate running totals by customer using window functions in Snowflake.
```

### Method 2: Let Copilot Auto-Select

Just describe your task naturally:

```
@workspace
[Your task with relevant keywords]
```

**Example:**
```
@workspace
I need to build a PySpark pipeline that ingests CSV files with retry logic and validates data quality using Great Expectations.
```

Copilot will activate: **Pipeline Builder** (primary) + **Quality Guardian** (supporting)

### Method 3: Request Multiple Archetypes

For complex tasks spanning multiple domains:

```
@workspace
Use [Archetype 1] and [Archetype 2] archetypes.

[Your complex task]
```

**Example:**
```
@workspace
Use Transformation Alchemist and Quality Guardian archetypes.

Build a PySpark SCD Type 2 pipeline with comprehensive data quality checks.
```

---

## Archetype Response Format

When an archetype is activated, expect this structured response:

```
🎭 **Archetype(s) Active:** [Archetype Name(s)]
📋 **Reasoning:** [Why this archetype was selected]
🎯 **Approach:** [Strategy being used]

[Main response content following archetype's expertise]

📊 **Key Features/Notes:**
- [Feature 1]
- [Feature 2]

💡 **Additional Recommendations:**
- [Recommendation 1]
- [Recommendation 2]
```

---

## R.I.S.C.E. Framework

All archetypes follow the **R.I.S.C.E. Golden Prompt Framework**:

### R - Role
The expert persona (e.g., "Senior Snowflake SQL Query Crafter")

### I - Input
Raw materials provided:
- Schemas
- Sample data
- Existing code
- Requirements

### S - Style
Standards to follow:
- Coding conventions
- Naming patterns
- Library preferences
- Documentation format

### C - Constraints
Guardrails and limits:
- Performance budgets
- Security rules
- Resource limits
- Cost constraints

### E - Expected Output
Exact deliverable:
- File type
- Function signature
- Documentation format
- Test coverage

---

## Multi-Archetype Workflows

### Example 1: Complete Data Pipeline

**Task**: "Build a complete data pipeline from CSV ingestion to analytics-ready table"

**Archetypes activated (in sequence)**:
1. **Planner** → Creates task breakdown
2. **Pipeline Builder** → Implements ingestion with retry
3. **Transformation Alchemist** → Applies business logic transformations
4. **Quality Guardian** → Adds validation checks
5. **Performance Tuner** → Optimizes Spark job
6. **Pipeline Orchestrator** → Creates Airflow DAG
7. **Documentation Evangelist** → Documents the pipeline

**Cascade Prompt**:
```
@workspace **CASCADE MODE**

Build a complete data pipeline:
- Source: Daily CSV files in S3
- Transform: Apply business rules, SCD Type 2
- Quality: Validate schema, nulls, uniqueness
- Target: Delta Lake analytics table
- Schedule: Daily at 2 AM
- Document: Full pipeline documentation

Work through this using the appropriate archetypes automatically.
Ask for approval at each major phase.
```

### Example 2: Query Optimization

**Task**: "This Snowflake query is slow, optimize it"

**Archetypes activated**:
1. **SQL Query Crafter** (primary) - Rewrites query
2. **Performance Tuner** (supporting) - Analyzes EXPLAIN plan
3. **Documentation Evangelist** (supporting) - Documents changes

### Example 3: API + Data Pipeline

**Task**: "Create REST API that triggers a data pipeline"

**Archetypes activated**:
1. **Integration Specialist** - API design
2. **Pipeline Builder** - Data pipeline
3. **Automation Scripter** - Deployment scripts
4. **Documentation Evangelist** - API docs

---

## Quick Reference: Which Archetype When?

| **Your Goal** | **Use This Archetype** |
|---------------|------------------------|
| Break down a complex feature | **Planner** |
| Write code | **Implementer** |
| Review code quality | **Reviewer** |
| Optimize SQL query | **SQL Query Crafter** + **Performance Tuner** |
| Build ETL pipeline | **Transformation Alchemist** |
| Ingest data with error handling | **Pipeline Builder** |
| Add quality checks | **Quality Guardian** |
| Speed up Spark job | **Performance Tuner** + **Transformation Alchemist** |
| Schedule workflows | **Pipeline Orchestrator** |
| Automate ops tasks | **Automation Scripter** |
| Write documentation | **Documentation Evangelist** |
| Connect external systems | **Integration Specialist** |

---

## Tips for Best Results

### 1. Be Specific with Context
Good:
```
@workspace
Act as Transformation Alchemist.

Build a PySpark SCD Type 2 pipeline for customer dimensions.
Source: /mnt/source/customers (daily full snapshot)
Target: /mnt/analytics/dim_customer
Keys: customer_id
Track: name, email, address
```

Bad:
```
@workspace
Make a data pipeline
```

### 2. Mention Your Tech Stack
- "Using Snowflake..." → SQL Query Crafter
- "Using PySpark and Delta Lake..." → Transformation Alchemist
- "Using Great Expectations..." → Quality Guardian
- "Using Airflow..." → Pipeline Orchestrator

### 3. Combine Archetypes for Complex Tasks
```
@workspace
I need Pipeline Builder for ingestion, Quality Guardian for validation, and Documentation Evangelist for docs.

Build an ingestion pipeline for...
```

### 4. Use CASCADE MODE for Full Automation
```
@workspace **CASCADE MODE**

[Complex multi-step task]

Work through this using the appropriate archetypes.
```

---

## Archetype Collaboration Patterns

Archetypes work together naturally:

```
SQL Query Crafter → Performance Tuner
└─ Optimization feedback loop

Pipeline Builder → Quality Guardian → Pipeline Orchestrator
└─ Ingest → Validate → Schedule

Transformation Alchemist → Quality Guardian → Documentation Evangelist
└─ Transform → Validate → Document

Integration Specialist → Automation Scripter
└─ API design → Deployment automation
```

---

## Custom Archetype Activation

You can create your own activation patterns by editing:

1. **`.github/copilot-instructions.md`** - Add your archetype to the list
2. **`.vscode/archetypes/your-archetype.md`** - Define the archetype
3. Use it: `@workspace Act as [YourArchetype]...`

---

## Examples in Action

### Example 1: Auto-Detection

**Your prompt**:
```
@workspace
I have a slow Snowflake query with multiple CTEs and window functions. Can you optimize it?
```

**Copilot responds**:
```
🎭 **Archetypes Active:** SQL Query Crafter (Primary), Performance Tuner (Supporting)
📋 **Reasoning:** SQL optimization task detected keywords "Snowflake", "optimize", "CTEs", "window functions"

[Optimized query with EXPLAIN analysis]
```

### Example 2: Multi-Archetype

**Your prompt**:
```
@workspace
Build a PySpark pipeline that:
1. Ingests JSON from S3 with retry logic
2. Applies SCD Type 2 transformations
3. Validates data quality
4. Schedules daily via Airflow
```

**Copilot responds**:
```
🎭 **Archetypes Active:**
- Pipeline Builder (ingestion + retry)
- Transformation Alchemist (SCD Type 2)
- Quality Guardian (validation)
- Pipeline Orchestrator (Airflow scheduling)

📋 **Reasoning:** Complex pipeline requiring multiple specialized archetypes

**Phase 1: Ingestion (Pipeline Builder)**
[Ingestion code]

**Phase 2: Transformation (Transformation Alchemist)**
[SCD Type 2 code]

**Phase 3: Quality (Quality Guardian)**
[Validation code]

**Phase 4: Orchestration (Pipeline Orchestrator)**
[Airflow DAG]
```

---

Happy architecting with specialized archetypes!
