import CreatorCard from "../components/CreatorCard";
import { useCreator } from "../hooks/useCreators";
import HeaderSection from "../components/HeaderSection";

// const testCreators = [
//   {
//     id: 1,
//     name: "Mr Beast",
//     url: "https://www.youtube.com/@MrBeast",
//     description: "He is super rich",
//   },
//   {
//     id: 2,
//     name: "Neetcode",
//     url: "https://www.youtube.com/@NeetCode",
//     description: "Preparing for coding interviews? Checkout neetcode.io",
//   },
//   {
//     id: 3,
//     name: "Sam Sulek",
//     url: "https://www.youtube.com/@sam_sulek",
//     description: "Bodybuilding Content",
//   },
//   {
//     id: 4,
//     name: "Miami Heat",
//     url: "https://www.youtube.com/@MiamiHEAT",
//     description: "🏆🏆🏆 #HEATNation #HEATCulture",
//   },
//   {
//     id: 5,
//     name: "Mr Beast",
//     url: "https://www.youtube.com/@MindTheGamePodcast",
//     description:
//       "Mind The Game is an entry into the heralded basketball minds of LeBron James and Steve Nash.",
//   },
// ];

const ShowCreators = () => {
  const { creators } = useCreator();

  return (
    <section className="content-card-container">
      <HeaderSection />
      {creators ? (
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
