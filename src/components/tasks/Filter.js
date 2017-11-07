import React from 'react'
import FilterButton from "../../containers/tasks/FilterButton";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "./filterTypes";

const Filter = () => (
    <p>
        <FilterButton filter={SHOW_ALL}>
            All
        </FilterButton>
        <FilterButton filter={SHOW_ACTIVE}>
            Active
        </FilterButton>
        <FilterButton filter={SHOW_COMPLETED}>
            Completed
        </FilterButton>
    </p>
);

export default Filter;
