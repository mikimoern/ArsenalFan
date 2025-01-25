import React, { useEffect, useState } from "react";
import MainTitle from "../components/mainTitle/MainTitle.jsx";
import Pagination from "../components/pagination/Pagination.jsx";
import SelectFilter from "../components/selectFilter/SelectFilter.jsx";
import CardNews from "../components/cardNews/CardNews.jsx";
import axios from "axios";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState("all"); // Filter status
  const itemsPerPage = 6;


  const [newss, setNewss] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/news/");
        setNewss(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const categories = [
    { value: "all", label: "All" },
    { value: "match report", label: "Match Report" },
    { value: "team news", label: "Team News" },
    { value: "academy", label: "Academy" },
    { value: "preview", label: "Preview" },
  ];

  // News filtering
  const filteredNews =
    filteredCategory === "all"
      ? newss
      : newss.filter((news) => news.category === filteredCategory);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (category) => {
    setFilteredCategory(category); // Updating the selected category
    setCurrentPage(1); // Reset pagination to the first page
  };

  return (
    <main className="main">
      <div className="container">
        <MainTitle text="All News" />
        <SelectFilter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
        <CardNews newsData={currentData} />
        <Pagination
          currentPage={currentPage}
          totalItems={filteredNews.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default News;
