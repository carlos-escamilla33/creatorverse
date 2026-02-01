import CreatorCard from "../components/CreatorCard";
import { useCreator } from "../hooks/useCreators";

const ShowCreators = () => {
  const { creators } = useCreator();

  return (
    <section className="content-card-container">
      {creators.length == 0 ? (
        <p>No Data Available...</p>
      ) : (
        creators.map((creator) => {
          return <CreatorCard key={creator.id} creator={creator} />;
        })
      )}
    </section>
  );
};

export default ShowCreators;
