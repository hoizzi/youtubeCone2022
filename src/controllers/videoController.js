let videos = [
    {
        title: "First",
        rating: 5,
        comments:2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Second",
        rating: 5,
        comments:2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third",
        rating: 5,
        comments:2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];

export const trending = (req, res) => {
    res.render("home", {pageTitle: "Home", videos});
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    res.render("watch", {pageTitle: `Watching: ${video.title}`, video});
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    res.redirect(`/videos/${id}`);
};