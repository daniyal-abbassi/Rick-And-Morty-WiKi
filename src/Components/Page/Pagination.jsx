import ReactPaginate from "react-paginate";
import "./pagination.css";

export default function Pagination({ page, setPage, info }) {
  return (
    <>
      <ReactPaginate
        pageCount={info?.pages}
        nextLabel="Next"
        previousLabel="Previous"
        onPageChange={(data) => setPage(data.selected + 1)}
        className="pagination  justify-content-center gap-3"
        nextClassName="btn btn-primary"
        previousClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}
