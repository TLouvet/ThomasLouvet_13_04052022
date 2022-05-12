import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "../../components/Hero";
import { HomeFeature } from "../../components/HomeFeature";
import { fetchUser } from "../../services/user";
import { selectUser } from "../../utils/selector";
import { features, sectionTitle } from "./data";
import './HomePage.scss';

export const HomePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Upon arrival, check if user remains connected via token presence
  useEffect(() => {
    if (!user.data && (localStorage.getItem("token") || sessionStorage.getItem('token'))) {
      dispatch(fetchUser);
    }
  }, [user, dispatch])

  return (
    <main role="main" >
      <Hero />
      <section className="features">
        <h2 className="sr-only">{sectionTitle}</h2>

        {features.map((feature, index) => (
          <HomeFeature key={index} title={feature.title} description={feature.description} alt={feature.alt} image={feature.image} />
        ))}
      </section>
    </main>
  )
}