## Calculator in HTML with CSS and Javascript without EVAL()

This is a simple calculator that uses javascript to perform the various operations.
JavaScript does not use the EVAL() method.
The choice not to use the eval method is as follows:
-Is slow.
The eval function calls the Javascript interpreter, which is slower than any other function you can run.
-It's insecure.
Whatever you pass to the eval function will be executed. Therefore, if someone manages to inject malicious code into it, it will be executed.
-Finding errors can be more complicated.
