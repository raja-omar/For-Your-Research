import Item from "./Item";
import Loading from "../Loader/Loading";
import Paper from "../../util/Paper";

export default function Papers(props: any): JSX.Element {
  return props.isLoaded ? (
    <div className="relative flex flex-col divide-y border rounded-lg overflow-y-scroll overflow-x-hidden">
      {props.papers.map((paper: Paper, index: any) => {
        console.log(paper.cited_by_number);
        return (
          <Item
            key={index}
            title={paper.title}
            link={paper.link}
            citedByNumber={paper.cited_by_number}
            citedByLink={paper.cited_by_link} // Doesn't work with paper.cited_by_link and same for others
            versionLink={paper.version_link}
            versionNumber={paper.version_number}
            delete={false}
            editable={false}
          />
        );
      })}
    </div>
  ) : (
    <Loading fetching={props.fetchingInProgress} />
  );
}
