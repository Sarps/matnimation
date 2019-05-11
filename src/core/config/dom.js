export default {
  TABBAR: [
    {
      name: "Feature",
      content: [
        {
          type: "card",
          icon: "far fa-home",
          text: "Graph",
          key: "Graph"
        },
        {
          type: "card",
          icon: "far fa-home",
          text: "Media"
        },
        {
          type: "group",
          items: [
            { icon: "far fa-home", text: "Math Expression" },
            { icon: "far fa-home", text: "Shape / Polygon" },
            { icon: "far fa-home", text: "Text / Paragraph" }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "card",
          icon: "far fa-home",
          text: "Box"
        },
        {
          type: "group",
          items: [
            { icon: "far fa-home", text: "Sphere" },
            { icon: "far fa-home", text: "Plane" },
            { icon: "far fa-home", text: "Frustrum" }
          ]
        },
        {
          type: "group",
          items: [
            { icon: "far fa-home", text: "Cone" },
            { icon: "far fa-home", text: "Cylinder" },
            { icon: "far fa-home", text: "Surface" }
          ]
        },
        {
          type: "divider"
        }
      ]
    },
    {
      name: "Animation",
      content: [
        {
          type: "card",
          icon: "far fa-home",
          text: "Interpolator"
        },
        {
          type: "divider"
        }
      ]
    }
  ],

  PREVIEWER: [
    { icon: "far fa-camera-retro", key: "screenshot" },
    { icon: "far fa-plus", key: "add" },
    { icon: "far fa-search", key: "zoom" },
    { icon: "far fa-file-import", key: "import" },
    { icon: "far fa-file-export", key: "export" },
    { icon: "far fa-code-branch", key: "git" }
  ]
};
