This is my personal website.

------------------------------------

Notes:



Notable components:
-----------------------------------

**hooks/useImg**

**hooks/useImgs**
* fetches images as strings with loading states
* keeps a global CACHE object

Use useImg for 1 image or useImags for multiple

<code>
@returns Promise(base64:string);
@returns Promise(base64:string[]);
</code>

---

**hooks\useRefs**
* multiple **dynamic** react refs instead of just 1 at a time