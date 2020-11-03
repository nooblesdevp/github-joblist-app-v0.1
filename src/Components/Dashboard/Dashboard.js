import React, { useEffect, useState } from "react";
import { MdSearch, MdTune } from "react-icons/md";
import { ACTIONS } from "../../context/reducer";
import { useStateValue } from "../../context/Provider";
import axios from "axios";
import { LoopCircleLoading } from "react-loadingg";

import "./Dashboard.scss";
import CardJobs from "../CardJobs/CardJobs";
import InfiniteScroll from "react-infinite-scroll-component";

function Dashboard({ job }) {
  const [{ jobs }, dispatch] = useStateValue();
  const [isloading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

  useEffect(() => {
    setIsLoading(true);

    fetchData();
    setIsLoading(false);
  }, []);
  const fetchData = async () => {
    const cancelToken = axios.CancelToken.source();
    await axios
      .get(`${BASE_URL}`, {
        params: { _limit: 7 },
      })
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { jobs: res.data.slice(0, 7) },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return alert(e.message);
      });
    return () => {
      cancelToken.cancel();
    };
  };

  useEffect(() => {
    setFilterSearch(
      jobs.filter((job) => {
        return job.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, jobs]);

  return (
    <div className="dashboard">
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchData}
        hasMore={true}
        loader={isloading && <h1>Loading ... </h1>}
      >
        <div className="dashboard__header">
          <h1>Lastest Gigs</h1>
          <div className="dashboard__search">
            <div className="dashboard__searchInput">
              <MdSearch className="dashboard__searchIcon" />
              <input
                type="text"
                className="dashboard__input"
                placeholder="search job ..."
                onChange={(e) => setSearch(e.target.value)}
                name="description"
              />
            </div>
            <MdTune className="dashboard__filterIcon" />
          </div>
        </div>

        {isloading && <h1>Loading ... </h1>}
        {jobs.map((job) => {
          return <CardJobs key={job.id} job={job} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Dashboard;
