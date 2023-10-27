// import java.util.ArrayList;
// import java.util.List;
// import java.util.Queue;

// public class Market implements QueueBehaviour, MarketBehaviour {
//     private List<Actor> orders;
//     private Queue<Actor> queue;

//     @Override
//     public void takeInQueue(Actor actor) {
//         queue.add(actor);
//     }

//     @Override
//     public void takeOrders() {
//         // Логика получения заказов
//     }

//     @Override
//     public void giveOrders() {
//         // Логика выдачи заказов
//     }

//     @Override
//     public void releaseFromQueue() {
//         queue.poll();
//     }

//     @Override
//     public void acceptToMarket(Actor actor) {
//         orders.add(actor);
//     }

//     @Override
//     public void releaseFromMarket(List<Actor> actors) {
//         orders.removeAll(actors);
//     }

//     @Override
//     public void update() {
//         // Логика обновления состояния магазина
//     }
// }