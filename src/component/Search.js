import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="mt-5">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
