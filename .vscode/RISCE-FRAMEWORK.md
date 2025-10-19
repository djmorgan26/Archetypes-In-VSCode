# R.I.S.C.E. Golden Prompt Framework

## Overview

The **R.I.S.C.E. Framework** is a structured approach used by all archetypes in this system to ensure consistent, high-quality outputs. It stands for:

- **R**ole
- **I**nput
- **S**tyle
- **C**onstraints
- **E**xpected Output

---

## Framework Components

### R - Role

**Definition**: The expert persona or professional hat the AI assumes.

**Purpose**: Establishes the domain expertise, perspective, and authority level.

**Examples**:
- "Senior Snowflake SQL Query Crafter"
- "Databricks PySpark ETL Engineer"
- "Data Quality and Validation Specialist"
- "Software Architecture Planner"

**How to Use**:
```
@workspace
Act as a [Role/Persona] with expertise in [domain].

[Your task]
```

---

### I - Input

**Definition**: The raw materials, context, and information provided for the task.

**What to Include**:
- Schemas (database, file, API)
- Sample data or data dictionaries
- Existing code to refactor/optimize
- Business requirements
- Performance metrics/SLAs
- Error messages or logs

**Examples**:

**Good Input** (Specific):
```
Input:
- Source schema: customers table (id INT, name VARCHAR, email VARCHAR, created_at TIMESTAMP)
- Target: Delta Lake table at /mnt/analytics/dim_customer
- Business logic: Deduplicate by email, keep most recent
- Data volume: 10M rows daily
- SLA: Process within 30 minutes
```

**Poor Input** (Vague):
```
Input:
- Some customer data
- Need to process it
```

---

### S - Style

**Definition**: The coding standards, conventions, and stylistic preferences to follow.

**What to Specify**:
- Programming language (Python 3.10, Scala 2.12, SQL)
- Code style guide (PEP 8, Google Style, etc.)
- Naming conventions (snake_case, camelCase)
- Library preferences (PySpark DataFrames over RDDs)
- Documentation format (docstrings, inline comments)
- Formatting (indentation, line length)

**Examples**:

**PySpark Style**:
```
Style:
- Python 3.10 with type hints
- PEP 8 compliance
- Use PySpark DataFrame API (not RDDs)
- Snake_case for variables and functions
- Comprehensive docstrings (Google format)
- Inline comments for business logic
- Max line length: 100 characters
```

**SQL Style**:
```
Style:
- Uppercase SQL keywords (SELECT, FROM, WHERE)
- CTEs for multi-step queries
- Meaningful table aliases
- Inline comments for complex logic
- Snowflake-specific features encouraged
```

---

### C - Constraints

**Definition**: Guardrails, limits, and requirements that must be respected.

**Categories**:

1. **Performance Constraints**:
   - Query execution time < 30 seconds
   - Memory usage < 16GB
   - Minimize shuffles in Spark
   - Use broadcast joins when appropriate

2. **Security Constraints**:
   - No hardcoded credentials
   - Use role-based access control
   - PII data masking required
   - Audit trail for all writes

3. **Resource Constraints**:
   - Use Small warehouse (Snowflake)
   - Max 8 executor cores (Spark)
   - Cost budget: $X per run

4. **Business Constraints**:
   - Idempotency required
   - Must handle late-arriving data
   - Schema evolution must be backward-compatible

**Example**:
```
Constraints:
- Pipeline must be idempotent (reruns produce same result)
- Query execution time < 60 seconds
- No external API calls (air-gapped environment)
- Must handle schema evolution gracefully
- PII columns must be hashed
- Cost: Stay under $5 per run
```

---

### E - Expected Output

**Definition**: The exact deliverable format, structure, and artifacts to produce.

**What to Specify**:
- File type (Python module, SQL file, Jupyter notebook)
- Function signatures
- Return types
- Documentation format
- Test coverage requirements
- Example usage

**Examples**:

**PySpark Pipeline**:
```
Expected Output:
- Python module: data_ingestion_pipeline.py
- Main function signature:
  def ingest_data(
      spark: SparkSession,
      source_path: str,
      target_path: str,
      config: Dict[str, Any]
  ) -> Dict[str, Any]
- Return: {"status": "success", "records": 1000, "duration_sec": 45}
- Include: Retry logic class, error handling, logging
- Documentation: Docstrings for all functions
- Example usage at bottom of file
```

**SQL Query**:
```
Expected Output:
- SQL file: customer_deduplication.sql
- Query structure: CTEs for each logical step
- Inline comments explaining business logic
- EXPLAIN plan analysis as comment at top
- Expected runtime estimate
- Sample output (first 5 rows) as comment
```

---

## Applying R.I.S.C.E. to Prompts

### Example 1: SQL Query Optimization

```
@workspace
Act as SQL Query Crafter.

**Role:** Senior Snowflake SQL Developer

**Input:**
- Current query: [paste slow query]
- Execution time: 5 minutes (too slow)
- Table sizes: customers (10M rows), orders (50M rows)
- Goal: Running totals by customer

**Style:**
- Uppercase SQL keywords
- CTEs for readability
- Snowflake window functions
- Inline comments

**Constraints:**
- Execution time must be < 30 seconds
- Use clustering keys if beneficial
- Stay on X-Small warehouse

**Expected Output:**
- Optimized SQL query
- EXPLAIN plan comparison (before/after)
- Performance improvement estimate
- Clustering key recommendation
```

### Example 2: PySpark ETL Pipeline

```
@workspace
Act as Transformation Alchemist.

**Role:** Databricks PySpark ETL Engineer

**Input:**
- Source: Daily CSV files in /mnt/source/transactions
- Schema: transaction_id, customer_id, amount, timestamp
- Target: Delta table with SCD Type 2
- Volume: 1M records/day

**Style:**
- Python 3.10 with type hints
- PySpark DataFrame API
- Modular functions
- Google-style docstrings

**Constraints:**
- Must be idempotent
- Execution time < 10 minutes
- Handle late-arriving data (7-day window)
- Add audit columns (loaded_at, loaded_by)

**Expected Output:**
- Python module: transaction_pipeline.py
- Functions:
  - read_source()
  - apply_scd_type_2()
  - write_to_delta()
- Retry logic with exponential backoff
- Unit test examples
- Usage documentation
```

### Example 3: Data Quality Checks

```
@workspace
Act as Quality Guardian.

**Role:** Data Quality Engineer

**Input:**
- Target table: analytics.fact_sales
- Schema: [provide schema]
- Business rules: [list rules]
- Historical data profile available

**Style:**
- Great Expectations framework
- Python 3.10
- Clear expectation names
- Actionable error messages

**Constraints:**
- Validation runtime < 2 minutes
- Fail-fast on critical errors
- Warning-level for statistical anomalies
- Integration with existing pipeline

**Expected Output:**
- GE expectation suite: sales_quality_suite.json
- Python validation script
- Quality report template
- Threshold configuration (YAML)
- Integration code for pipeline
```

---

## R.I.S.C.E. Benefits

### 1. Consistency
All archetypes follow the same framework → predictable outputs

### 2. Clarity
Explicit requirements → fewer iterations and misunderstandings

### 3. Quality
Defined constraints → outputs meet requirements

### 4. Efficiency
Structured inputs → AI doesn't need to guess or make assumptions

### 5. Reproducibility
Complete specification → others can understand and replicate

---

## Quick Reference Template

Copy this template for your prompts:

```
@workspace
Act as [Archetype Name].

**Role:** [Expert persona]

**Input:**
- [Context item 1]
- [Context item 2]
- [Sample data/schemas]

**Style:**
- [Language and version]
- [Code style guide]
- [Naming conventions]
- [Documentation format]

**Constraints:**
- [Performance requirement]
- [Security requirement]
- [Resource limit]
- [Business rule]

**Expected Output:**
- [File/artifact type]
- [Structure/format]
- [Function signatures]
- [Documentation level]
- [Additional deliverables]

[Specific task description]
```

---

## R.I.S.C.E. in CASCADE MODE

When using CASCADE MODE, R.I.S.C.E. is applied automatically to each phase:

```
@workspace **CASCADE MODE**

Build a data pipeline.

**Role:** Use appropriate archetypes (Planner → Pipeline Builder → Quality Guardian)

**Input:**
- Source: S3 CSV files
- Target: Delta Lake analytics table
- SLA: 30 minutes

**Style:**
- PySpark with type hints
- Delta Lake best practices
- Great Expectations for quality

**Constraints:**
- Idempotent pipeline
- Cost < $10 per run
- Handle schema evolution

**Expected Output:**
- Complete working pipeline
- Quality validation suite
- Documentation
- Airflow DAG

Work through this autonomously using R.I.S.C.E. for each phase.
```

Each archetype activated in CASCADE MODE applies R.I.S.C.E. to its specific task.

---

## R.I.S.C.E. for Different Archetypes

### Planner
- **Role**: Strategic task decomposer
- **Input**: High-level feature/goal
- **Style**: Numbered lists, clear dependencies
- **Constraints**: 5-10 tasks, each task < 4 hours
- **Expected Output**: Task list with file references and acceptance criteria

### Implementer
- **Role**: Focused code developer
- **Input**: Single task from plan
- **Style**: Project coding standards
- **Constraints**: Minimal changes, preserve existing patterns
- **Expected Output**: Working code with tests

### Reviewer
- **Role**: Quality assurance specialist
- **Input**: Recent changes/commits
- **Style**: Constructive feedback format
- **Constraints**: Flag security/performance issues
- **Expected Output**: Review report with specific recommendations

### SQL Query Crafter
- **Role**: Snowflake SQL expert
- **Input**: Schema, sample data, requirements
- **Style**: CTEs, window functions, Snowflake features
- **Constraints**: Performance budgets, query optimization
- **Expected Output**: Optimized SQL with EXPLAIN analysis

### Transformation Alchemist
- **Role**: PySpark ETL engineer
- **Input**: Source/target schemas, transformation logic
- **Style**: DataFrame API, Delta Lake patterns
- **Constraints**: Memory efficiency, idempotency
- **Expected Output**: Production-ready pipeline code

### Quality Guardian
- **Role**: Data quality specialist
- **Input**: Data schema, business rules
- **Style**: Great Expectations framework
- **Constraints**: Performance impact, fail-fast on critical errors
- **Expected Output**: Validation suite with thresholds

---

## Best Practices

### 1. Be Explicit
Don't assume the AI knows your preferences. Spell out requirements clearly.

### 2. Provide Examples
Show sample inputs and desired outputs when possible.

### 3. Specify Edge Cases
Mention how to handle nulls, empty data, errors.

### 4. Include Context
Reference existing code, schemas, patterns to follow.

### 5. Set Realistic Constraints
Balance perfection with practicality.

---

Happy prompting with R.I.S.C.E.!
