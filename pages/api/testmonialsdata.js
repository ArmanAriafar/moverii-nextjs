const TestmonialsData = [
    {
        id: 1,
        image: "https://s6.uupload.ir/files/slide1-min_ukuv.png",
        text: "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit. Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit.",
        author: "Micheal Jackson",
    },
    {
        id: 2,
        image: "https://s6.uupload.ir/files/slide2-min_2gj.png",
        text: "Having founded in 2010, we are well established as a surf lodge and camp and have seen a lot. However, never have we encountered a platform that is so close to its customers. They do not just send you some bookings but are actually THERE, answering your questions and making sure you have all you need to do your business: To make customers happy.",
        author: "Joana Chill In",
    },
    {
        id: 3,
        image: "https://s6.uupload.ir/files/slide3-min_dzju.png",
        text: "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit. Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit.",
        author: "Micheal Jackson",
    },
];

export default function handler(req, res) {
    res.status(200).json(TestmonialsData);
}
