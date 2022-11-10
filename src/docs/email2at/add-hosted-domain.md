
You have the choice between using a subdomain on one of our hosted email domains or you can setup your own domain like `support@yourdomain.com`. Below are the list of hosted domain names we offer.

* `mspimail.com`
* `mspimail.net`
* `mspiparser.com`
* `mspiparser.net`
* `mxparser.com`
* `mxparser.net`
* `onmspi.com`
* `onmspi.net`

## Add a Custom Domain
You can add one or more domains or subdomains to your Email2AT account. Any emails sent to these domains will be processed by Email2AT Advanced using the rules defined on the Rules page.

To add a custom domain, navigate to the [Email2AT Advanced homepage](https://console.mspintegrations.com/#/email2at/advanced/mailboxes/hosted). At the bottom of the page is the `Custom Domains` panel. In the text input and click the `+ Add` button. We suggest something like `support.youdomain.com` to start off with.

Once you have done this you will need to add the follow MX records to your domain's DNS provider.

* `hosted-mx-a.email2at.com`
* `hosted-mx-b.email2at.net`

Changes to your DNS settings may take time to propagate.

## Add Hosted Sub-Domains
In add a new hosted domain, navigate to the [Email2AT Advanced homepage](https://console.mspintegrations.com/#/email2at/advanced/mailboxes/hosted). At the bottom of the page is the `Hosted Sub-Domains` panel. Enter the desired prefix and select a domain from the dropdown menu and click the `+ Add` button.