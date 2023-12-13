import { useState } from "react";
import Item from "./Item";
import Loading from "./Loading";
import Paper from "../util/Paper";

export default function Papers(props: any): JSX.Element {
  return props.isLoaded ? (
    <div className="relative flex flex-col divide-y border rounded-lg overflow-y-scroll overflow-x-hidden">
      {props.papers.map((paper: Paper, index: any) => {
        return (
          <Item
            key={index}
            title={paper.title}
            link={paper.link}
            relevance={paper.relevance}
            citedByNumber={paper.cited_by_number}
            citedByLink = {paper.cited_by_link}
            versionLink = {paper.versions_link}
            versionNumber = {paper.versions_number}
            relatedArticles = {paper.related_articles}
          />
        );
      })}
    </div>
  ) : (
    <Loading fetching={props.fetchingInProgress} />
  );
}
