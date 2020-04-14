# Calculadora

## Passos para colocar parenteses

```
se parenteses in string:
    se ultimo parenteses igual a (:
        se número depois do parenteses:
            se operador depois do número:
                adicionar (
            se não:
                adicionar )
        se não:
            não fazer nada
    se ultimo parenteses igual a ):
        adicionar um operador qualquer e depois o parentes (
se não tiver parenteses e a string for vazia:
    adicionar o parenteses (
```
