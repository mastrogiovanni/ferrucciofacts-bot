# ferrucciofacts

Simple Telegram Bot to produce Ferruccio facts

## Installing the Chart

Add repository:

```console
$ helm repo add ferrucciofacts https://mastrogiovanni.github.io/ferrucciofacts/charts
```

```console
$ helm repo update
```

To install the chart with the release name `ferrucciofacts-bot`:

```console
$ helm install ferrucciofacts/ferrucciofacts --name ferrucciofacts-bot \
  --set telegram_bot_id=TELEGRAM-TOKEN
```

The command deploys ferrucciofacts Bot on the Kubernetes cluster in the default namespace.

## Uninstalling the Chart

To uninstall/delete the `ferrucciofacts-bot` deployment:

```console
$ helm delete --purge ferrucciofacts-bot
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Configuration

The following tables lists the configurable parameters of the Grafana chart and their default values.

Parameter | Description | Default
--- | --- | ---
`telegram_bot_id` | Telegram Bot Token | `-`

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`.

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install ferrucciofacts/ferrucciofacts --name ferrucciofacts-bot -f values.yaml
```

> **Tip**: You can use the default [values.yaml](values.yaml)
```
