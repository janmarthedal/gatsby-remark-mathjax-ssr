# gatsby-remark-mathjax-ssr

[gatsby-remark-mathjax-ssr][1] adds math equation support to gatsby using
[remark-math][2] and [mathjax][3].

It is inspired by the Gatsby plugin [gatsby-remark-katex](https://www.gatsbyjs.org/packages/gatsby-remark-katex/).

## Install

`npm install --save gatsby-transformer-remark gatsby-remark-mathjax-ssr`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-mathjax-ssr`,
          options: {
          }
        }
      ],
    },
  },
],
```

**Add Mathjax CSS to your template:** Mathjax's CSS file is required to render the formulas correctly. Include the CSS file in your template:

```javascript
require(`gatsby-remark-mathjax-ssr/mathjax.css`)
```

### Math Equations in Inline Mode

Surround your equation with `$` to generate a math equation in inline mode.

**Example markdown:**

```markdown
$a^2 + b^2 = c^2$
```

### Math Equations in Display Mode

Surround your equation with `$$` and new-lines to generate a math equation in
display mode.

**Example markdown:**

```markdown
$$
a^2 + b^2 = c^2
$$
```

[1]: https://github.com/janmarthedal/gatsby-remark-mathjax-ssr/
[2]: https://github.com/Rokt33r/remark-math
[3]: https://www.mathjax.org
