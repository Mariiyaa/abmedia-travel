const getTopSellingPackages = (req, res) => {
    try {
        const mockPackages = [
        { title: "Golden Temple Tour",image:"https://wallpaperaccess.com/full/4822006.jpg" },
        { title: "Amazing Kerala Tour" ,image:"https://wallpapercave.com/wp/wp2649841.jpg"},
        { title: "Kashmir Holiday Tour",image:"https://wallpaperaccess.com/full/8260104.jpg" },
        { title: "Rajasthan Tour",image:"https://wallpaperaccess.com/full/1905901.jpg" },
        { title: "Trip to Goa",image:"https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg" },
        { title: "Nainital Escape" ,image:"https://wallpaperaccess.com/full/9071222.jpg"}
    ];
    res.json(mockPackages);
}
     catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
}
module.exports = { getTopSellingPackages };