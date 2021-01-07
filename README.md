## Getting Started

First, install the dependenciesrun the development server:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Run the development server with SSL:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

```bash
yarn dev-ssl
```

For production build:

```bash
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For SSL Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

## Stacks Used

`Next.js`
`Sass`
`Typescript`
`redux`
`redux-thunk`
