import { Day } from "./day.model";
import { Recipe } from "../../recipe.model";

export class DaysService {

      private days: Day[] = [
            new Day(
                  'Poniedziałek',
                  new Recipe(
                        'Jajecznica ze szczypiorekim',
                        'Przepis na przygotowanie jajecznicy!',
                        'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                        'Składniki jajecznicy'),
                  new Recipe(
                        'Ryba z frytkami',
                        'Przepis na przygotowanie ryby z frytkami!',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                        'Składniki ryby z frytkami'),
                  new Recipe(
                        'Kanapki z dzemem',
                        'Przepis na dzem!',
                        'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                        'składniki do kolacji')
            ),
            new Day(
                  'Wtorek',
                  new Recipe(
                        'Parówki',
                        'Przepis na przygotowanie jajecznicy!',
                        'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                        'składniki do jajecznicy'),
                  new Recipe(
                        'Kurczak ',
                        'Przepis na przygotowanie ryby z frytkami!',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                        'składniki do obiadu'),
                  new Recipe(
                        'Zapiekanki',
                        'Przepis na dzem!',
                        'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                        'składniki do kolacji')
            ),
            new Day(
                  'Środa',
                  new Recipe(
                        'Jajecznica ze szczypiorekim',
                        'Przepis na przygotowanie jajecznicy!',
                        'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                        'Składniki jajecznicy'),
                  new Recipe(
                        'Ryba z frytkami',
                        'Przepis na przygotowanie ryby z frytkami!',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                        'Składniki ryby z frytkami'),
                  new Recipe(
                        'Kanapki z dzemem',
                        'Przepis na dzem!',
                        'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                        'składniki do kolacji')
            ),
            new Day(
                  'Czwartek',
                  new Recipe(
                        'Parówki',
                        'Przepis na przygotowanie jajecznicy!',
                        'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                        'składniki do jajecznicy'),
                  new Recipe(
                        'Kurczak ',
                        'Przepis na przygotowanie ryby z frytkami!',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                        'składniki do obiadu'),
                  new Recipe(
                        'Zapiekanki',
                        'Przepis na dzem!',
                        'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                        'składniki do kolacji')
            ),
            new Day(
                  'Piątek',
                  new Recipe(
                        'Parówki',
                        'Przepis na przygotowanie jajecznicy!',
                        'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                        'składniki do jajecznicy'),
                  new Recipe(
                        'Kurczak ',
                        'Przepis na przygotowanie ryby z frytkami!',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                        'składniki do obiadu'),
                  new Recipe(
                        'Zapiekanki',
                        'Przepis na dzem!',
                        'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                        'składniki do kolacji')
            )

      ];

      getDays() {
            return this.days.slice();
      }

      getDay(index: number) {
            return this.days[index];
      }
}