Running Node/Express with a self-signed SSL certificate
===

1. Run certlm.msc
2. Expand the <b>Certificates</b> node, then the <b>Personal</b> node.
3. Click on the <b>Certificates</b> node under <b>Personal</b> and find the localhost certificate in the right pane.
4. Right click on the certificate and choose <b>All Tasks</b>, then <b>Export</b>.
5. When the wizard starts, choose <b>Next</b>.
6. Select “Yes” for exporting the private key, then click <b>Next</b>
7. Select <b>Include all certificates</b> and <b>enable certificate privacy</b> from the PFX section, then click <b>Next</b>
8. You will also need to set a password and specify a location for the PFX file.
9. Once the PFX file has been saved, close out the certlm.msc program
10. Open an Ubuntu WSL prompt and cd to folder you saved the PFX file (e.g. cd /mnt/c/source/node/SSLWebApplication)
11. Create a cert.pem file as follows: openssl pkcs12 -in certificate.pfx -out cert.pem
	* provide the password from step 8 above
	* enter a new password and REMEMBER this password (e.g. scwswbw10)
12. Open the certificate.pem file in Notepad++
	* Copy the Private key to private.key
	* Copy the certificate to certificate.crt
	* Remember to keep the dashed lines intact when you copy the certificates – this is important
13. Decrypt the private key: openssl rsa -in private.key -out private.key
	* using the same input and output file will keep everying in one file
	* provide the password from step 11 above
14. You should have the following four files:
	* certificate.pfx
	* cert.pem
	* private.key
	* certificate.crt
14. Resolve the package dependencies
	* create the package.json file: ``npm init``
	* install the dependencies and update the package.json file: ``npm -install express --save``
15. Start the Node/Express program
	* ``node ./server.js``
16. Test in a browser tab: https:\\localhost:5001
	
Links
---
  * [Export SSL Certificate from a Windows environment](https://sysinfo.io/export-ssl-certificate)