import MySelect from "./UI/selects/MySelect";
import MyInput from "./UI/inputs/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        value={filter.query}
        // onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      <MySelect
        value={filter.sortValue}
        // onChange={(selectedSort) =>
        //   setFilter({ ...filter, sort: selectedSort })
        // }
        defaultValue="Sort"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
        ]}
      />
    </>
  );
};

export default PostFilter;
