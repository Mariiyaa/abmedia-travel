const getDestinations = (req, res) => {
    try {
        const mockDestinations = [
        { image:"https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg",name: "Goa", price: "₹4999" },
        { image:"https://wallpapercave.com/wp/wp2649841.jpg",name: "Kerala", price: "₹4999" },
        { image:"https://wallpaperaccess.com/full/8260104.jpg",name: "Jammu & Kashmir", price: "₹4999" },
        { image:"https://th-thumbnailer.cdn-si-edu.com/UFdA8xCnasA_lUnJP07BcnSJ79k=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/00804668-3f4b-46b2-800f-83926f5f1ce4.jpg",name: "Himachal Pradesh", price: "₹4999" },
        { image:"https://wallpaperaccess.com/full/8054966.jpg",name: "Assam", price: "₹4999" },
        { image:"https://c1.wallpaperflare.com/preview/538/881/76/gate-way-of-india-mumbai-historical-architecture.jpg",name: "Maharashtra", price: "₹4999" }
    ];
    res.json(mockDestinations);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).json({ message: "Internal Server Error" }); 
        
    }
  
};

module.exports = { getDestinations };
