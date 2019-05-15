---
layout: post
title:  "AdSense in Gatsby"
image: "./adsense-in-gatsby-LG.jpg"
date:   2019-05-15 12:30:00 +0000
author: Dale
categories: ["adsense", "gatsby", "react", "javascript", "rehype"]
---

How to add [Google AdSense](https://www.google.co.uk/adsense) and other components to a [Gatsby](https://www.gatsbyjs.org/) markdown blog.

## Introduction

[Gatsby](https://www.gatsbyjs.org/) has some great [plugins](https://www.gatsbyjs.org/plugins/) that allow you to use markdown files for your sites content which makes it ideal for static blogs but how do you start monetising your new blog to get some passive income from your readers?

There are many ways to do this with ads and affiliate marketing but probably the most popular is Google AdSense, it gives you tons of analytics and also offers plenty of customisation so that it looks and feels like part of your site.

### Using AdSense

If you don't have and AdSense account already and have only just started your blog or haven't yet created much content you may find this affects your application for an account as they require that you have enough content and not be "under construction". I found that a few blog posts was enough to get me accepted.

If you haven't got an AdSense account yet sign up here [google.co.uk/adsense](https://www.google.co.uk/adsense), Once you have been accepted you can create a new ad and return here to continue.


### Tools

To use AdSense in our markdown we're going to create an AdSense React component using [react-adsense](https://www.npmjs.com/package/react-adsense) then use [rehype-react](https://www.npmjs.com/package/rehype-react) to look for a tag in our markdown and replace it with our component.  

Underneath [rehype-react](https://www.npmjs.com/package/rehype-react) is using [rehype](https://github.com/rehypejs/rehype) that takes a [hast](https://github.com/syntax-tree/hast) format of our markdown provided by Gatsbys [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) plugin to hook into and replace certain tags with React components.

This is not limited to just our AdSense component and you can use any component you want, for example I've also done it with a Button component that links to examples in some of my posts.

## Implementation

First install the dependancies to make this work.

```sh
yarn add react-adsense rehype-react gatsby-transformer-remark
# or
npm install react-adsense rehype-react gatsby-transformer-remark
```

Update your config to include the [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) plugin if it's not already configured.

```javascript
// gatsby-config.js
// ...other config
plugins: [
  // ...other plugins
  'gatsby-transformer-remark',
],
```

Create your AdSense component, I used [react-adsense](https://www.npmjs.com/package/react-adsense) and wrapped it in a custom component with the correct props as it makes it a little easier, remember to add your own client and slot keys.  
The client value is your publisher ID which you can get in the AdSense console by going to "Account > Settings > Account Information" and the slot value is your ad ID.

```jsx
import React from 'react';
import AdSense from 'react-adsense';

const MyAdSense = () => (
  <AdSense.Google
    client='ca-pub-****************'
    slot='**********'
  />
);

export default MyAdSense;
```

<adsense></adsense>

In the template where you render your markup import the AdSense component you just created and [rehype-react](https://www.npmjs.com/package/rehype-react).

Create a "rehypeReact" instance, assign it to a constant and pass in the following configuration.

```jsx
// ./templates/Post.jsx
import rehypeReact from 'rehype-react'
import MyAdSense from '../components/MyAdSense/MyAdSense';

// ...
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'adsense': MyAdSense,
  },
}).Compiler;
// ...
```

What this does is replace any `<adsense></adsense>` tag in your markup file with the `MyAdSense` React component you made earlier, as I said before you can do this with any React component.

```graphql
query ($slug: String!) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      ...
    }
    htmlAst
  }
}
```

Instead of querying the `html` you instead query `htmlAst`.  
Where you may have previously been using something like `<div dangerouslySetInnerHTML={{ __html: html }} />` you now use the `renderAst` Method and pass it `htmlAst`.

```jsx
// ./templates/Post.jsx
// render
<div>{renderAst(htmlAst)}</div>
```

Now just use the tag in your markdown file!

```markdownRemark
# My post

lorem ipsum...
<adsense></<adsense>
...dolor sit amet
```

**You may have noticed that I didn't use a self closing tag, this is because it won't work, you must have a closing tag!**

That's it! a really clean and simple way to add AdSense or any other React Component into your markdown.

## Optional Additions

You could make configuration a little nicer by adding your AdSense keys to the "siteMetadata" in your "gatsby-config.js" then querying it and passing it to the AdSense component, this could be handy if you have multiple ads you want to be able to reference.

Experiment with other components, try not to go too crazy as blog content should ideally be easy on the eye but adding styled buttons and other components that you couldn't normally do inline with markdown can be a nice touch.

## Conclusion

Use this sparingly and for times where you need to add additional components in the middle of your markdown content such as AdSense, try to utilise frontmatter for meta about your content such as author, date and tags.

There's more than one way to do this but other implementations impact the markdown more aggressively such as adding imports to the top of your markdown file then adding JSX style tags like with [MDX](https://github.com/mdx-js/mdx) which in my opinion feels out of place in simple markup.

Although [rehype](https://github.com/rehypejs/rehype) also adds custom tags it looks and works much like adding a html tag to markdown, it's also sponsored by [Gatsby](https://www.gatsbyjs.org/) and naturally requires less setup.
