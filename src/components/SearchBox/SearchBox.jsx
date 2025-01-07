import { useId } from "react";
import s from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchId = useId();

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        id={searchId}
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
