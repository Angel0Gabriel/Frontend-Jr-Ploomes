# Executando o Projeto com Docker

> **Nota:** Para executar sem Docker, consulte o arquivo [README.md](./README.md)

## Pré-requisitos

- Docker instalado
- Docker Compose instalado (geralmente vem com o Docker)

## Executando com Docker Compose (Recomendado)

```bash
docker-compose up --build
```

O projeto estará disponível em: http://localhost:3000

## Executando apenas com Docker

### Build da imagem:

```bash
docker build -t live-coding-app .
```

### Executar o container:

```bash
docker run -p 3000:80 live-coding-app
```

O projeto estará disponível em: http://localhost:3000

## Comandos úteis

### Parar o container:

```bash
docker-compose down
```

### Rebuild sem cache:

```bash
docker-compose build --no-cache
```

### Ver logs:

```bash
docker-compose logs -f
```
