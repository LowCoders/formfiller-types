# FormFiller Types

Közös TypeScript típus definíciók a FormFiller ökoszisztémához.

## Telepítés

```bash
npm install formfiller-types
```

## Használat

```typescript
import {
  FormRole,
  FormPermission,
  FormRolePermissions,
  User,
  UserRole,
  USER_WILDCARDS
} from 'formfiller-types';
```

## Elérhető Típusok

- **RBAC típusok**: FormRole, FormPermission, FormRolePermissions
- **Felhasználó típusok**: User, UserRole, UserPreferences
- **Közös típusok**: Wildcards, audit logok
- **API típusok**: Response wrapperek, validációs hibák

## Részletes Dokumentáció

A teljes dokumentáció: [formfiller-docs](../formfiller-docs)

## Licenc

ISC
