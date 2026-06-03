# Kairo

Kairo is the host behavior pack that enables cross-addon communication in Minecraft Bedrock Edition. It manages the full lifecycle of all addons in the world — Discovery, Registration, and Activation — and routes API calls and events between them.

## Requirements

**kairo-database** must be installed alongside Kairo. It provides the persistent data store that Kairo uses to retain session data across version updates.

## Installation

1. Download `kairo.mcpack` from [GitHub Releases](https://github.com/kairo-js/kairo/releases)
2. Download `kairo-database.mcpack` from [GitHub Releases](https://github.com/kairo-js/kairo-database/releases)
3. Apply both behavior packs to your world

Once installed, addons using `@kairo-js/router` are automatically discovered and activated in dependency order on world load.

## Developing Addons

All addon development is done through [`@kairo-js/router`](/guide/). Kairo itself requires no configuration — just install it and build your addons against the router library.

## Custom Commands

Kairo registers the `/kairo:addons` command for managing addons at runtime. **Game Director** permission level is required.

### `/kairo:addons list`

Lists all registered addons with their current state.

### `/kairo:addons open`

Opens the Kairo management UI for the executing player.

### `/kairo:addons enable <addonId> [version]`

Enables an addon. If `version` is omitted, the latest stable version is activated. If only pre-release versions are available, the latest pre-release is used.

```
/kairo:addons enable economy-addon
/kairo:addons enable economy-addon 1.2.0
```

### `/kairo:addons disable <addonId>`

Disables an addon. `kairo` and `kairo-database` cannot be disabled.

```
/kairo:addons disable economy-addon
```

### `/kairo:addons status <addonId>`

Shows detailed status for an addon, including all installed versions and inactive reasons.

```
/kairo:addons status economy-addon
```
