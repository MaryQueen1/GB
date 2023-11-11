import java.util.List;
import java.util.Random;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.FileWriter;
import java.util.ArrayList;

public class ToyStore {
    private List<Toy> toys;

    public ToyStore() {
        toys = new ArrayList<>();
    }

    public void addToy(Toy toy) {
        toys.add(toy);
    }

    public void updateToyWeight(int toyId, int weight) {
        for (Toy toy : toys) {
            if (toy.getId() == toyId) {
                toy.setWeight(weight);
                break;
            }
        }
    }

    public Toy selectPrizeToy() {
        int totalWeight = 0;
        for (Toy toy : toys) {
            totalWeight += toy.getWeight();
        }

        Random random = new Random();
        int randomNumber = random.nextInt(totalWeight);

        int cumulativeWeight = 0;
        for (Toy toy : toys) {
            cumulativeWeight += toy.getWeight();
            if (randomNumber < cumulativeWeight) {
                toy.decreaseQuantity();
                return toy;
            }
        }

        return null;
    }

    public void savePrizeToyToFile(Toy toy, String filename) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename, true))) {
            writer.write(toy.getId() + "," + toy.getName());
            writer.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
