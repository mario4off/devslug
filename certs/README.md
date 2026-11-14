# Supabase database TLS

`supabase-prod-ca-2021.crt` is Supabase's public root CA certificate, downloaded from the [certificate URL used by Supabase Studio](https://supabase-downloads.s3-ap-southeast-1.amazonaws.com/prod/ssl/prod-ca-2021.crt). It contains no private key or credentials and expires on April 26, 2031.

For local networks without IPv6 connectivity, set `DATABASE_URL` in `.env` to the **Session pooler** connection string from your project's Connect panel (port 5432). Keep the project-qualified username from that string. Use these query parameters to verify the server certificate and hostname:

```text
sslmode=verify-full&sslrootcert=certs/supabase-prod-ca-2021.crt
```

The certificate path is relative to the process working directory. Run the app and Prisma CLI from the repository root. If using this configuration in a deployment, include the certificate at that path or provide an absolute path to the deployed certificate.

Restart the development server after changing `DATABASE_URL`: `lib/db.ts` caches the Prisma client across hot reloads.

See Supabase's [connection guide](https://supabase.com/docs/guides/database/connecting-to-postgres) and [TLS verification guide](https://supabase.com/docs/guides/platform/ssl-enforcement).
