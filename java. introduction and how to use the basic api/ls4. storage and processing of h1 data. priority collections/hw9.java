import java.util.LinkedList;

class hw9<T> {
    private LinkedList<T> queue;
    
    public hw9() {
        queue = new LinkedList<>();
    }
  
    public void enqueue(T element){
        queue.addLast(element);
    }

    public T dequeue(){
        return queue.pollFirst();
    }

    public T first(){
        return queue.peekFirst();
    }

    public LinkedList<T> getElements() {
        return new LinkedList<>(queue);
    }

    public static void main(String[] args) {
        hw9<Integer> queue;
        queue = new hw9<>();

        if (args.length == 0) {
            queue.enqueue(1);
            queue.enqueue(10);
            queue.enqueue(15);
            queue.enqueue(5);
        } else {
            queue.enqueue(Integer.parseInt(args[0]));
            queue.enqueue(Integer.parseInt(args[1]));
            queue.enqueue(Integer.parseInt(args[2]));
            queue.enqueue(Integer.parseInt(args[3]));
        }

        System.out.println(queue.getElements());

        queue.dequeue();
        queue.dequeue();
        System.out.println(queue.getElements());

        System.out.println(queue.first());
    }
}
