export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Et laborum veniam velit sint nostrud dolore consequat cupidatat officia elit.",
      picture: null,
    },
    {
      id: new Date().getTime() + 100,
      date: new Date().toDateString(),
      text: "Occaecat in adipisicing sunt anim.",
      picture: null,
    },
    {
      id: new Date().getTime() + 200,
      date: new Date().toDateString(),
      text: "Eu magna dolor voluptate eiusmod laboris id.",
      picture: null,
    },
  ],
});
