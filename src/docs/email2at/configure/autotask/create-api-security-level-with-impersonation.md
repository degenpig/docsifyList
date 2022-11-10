In this procedure, you will create a new Autotask API security level that allows associated API resources to impersonate other Autotask contacts and resources when making API calls.

> **Requirement:** In order to complete the following steps, you will need to login to Autotask as a user with full administrative rights.

To create a new Autotask API security level with rights to impersonate other contacts and resources:

1. Login to [Autotask](https://www.autotask.net/)
2. Hover the top-left Autotask mega-menu; click [ui-element]Admin[/ui-element]
3. On the top row of tabs, click [ui-element]Account Settings and Users[/ui-element]
4. Click to expand the section [ui-element]Resources/Users (HR)[/ui-element]
5. In the [ui-element]Security[/ui-element] section, click [ui-element]Security Levels[/ui-element]
6. Review your current list of security levels. If you already have a security level called [ui-element]API User w/ Full Impersonation Rights (API-only)[/ui-element], then you can skip the remainder of these steps.
7. On the existing security level called [ui-element]API User (system) (API-Only)[/ui-element], right-click, then click [ui-element]Copy Security Level[/ui-element]
8. Set the [ui-element]Name[/ui-element] field to [type]API User w/ Full Impersonation Rights[/type]
9. At the bottom, on the [ui-element]Web Services API[/ui-element] secion, click [ui-element]Full Permission[/ui-element]
10. At the top of the window, click [btn]Save & Close[/btn]

## What's Next

* [Create a new Autotask API User](email2at/configure/autotask/create-api-user.md)
* [Update your existing Autotask API User to allow Contact and Resource Impersonation](email2at/configure/autotask/update-api-user-for-impersonation.md)

