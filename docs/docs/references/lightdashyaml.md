---
sidebar_position: 6
---

# Lightdash.yml

A `lightdash.yml` is necessary to launch Lightdash. For most projects, the
default supplied `lightdash.yml` (used automatically) is just fine.

A `lightdash.yml` file can only contain one project.

Here is are two examples of a valid `lightdash.yml` containing two different types of projects:
```yaml
version: '1.0'

projects:
  - type: 'dbt'
    name: myproject
    project_dir: /path/to/your/dbt/project
    profiles_dir: /path/to/your/dbt/profiles
    rpc_server_port: 8580
```

```yaml
version: '1.0'

projects:
  - type: 'dbt_remote_server'
    name: myotherproject
    rpc_server_host: localhost
    rpc_server_port: 8580
```

## Environment variables

You can override any project config item using environment variables. 

The pattern for the environment variable name is: `LIGHTDASH_PROJECT_0_{key}` where
`{key}` is the name of the project variable in all upper case.

For example:

1. Update the `project_dir` of the first project: `LIGHTDASH_PROJECT_0_PROJECT_DIR`
2. Update the `rpc_server_host` of the second project: `LIGHTDASH_PROJECT_0_RPC_SERVER_HOST`

**Environment variables always take precedence over values in the `lightdash.yml` file**