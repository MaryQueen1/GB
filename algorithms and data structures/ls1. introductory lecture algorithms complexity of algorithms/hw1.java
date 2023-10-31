// Реализовать алгоритм пирамидальной сортировки (сортировка кучей).

public class hw1 {
    public static void main(String[] args) {
        int[] array = {9, 5, 2, 7, 1, 8, 3, 6, 4};
        
        System.out.println("Исходный массив:");
        printArray(array);
        
        hw1.sort(array);
        
        System.out.println("Отсортированный массив:");
        printArray(array);
    }
    
    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
    
    public static void sort(int[] array) {
        for (int i = array.length / 2 - 1; i >= 0; i--) {
            heapify(array, array.length, i);
        }

        for (int i = array.length - 1; i >= 0; i--) {
            int temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            
            heapify(array, i, 0);
        }
    }
    public static void heapify(int[] array, int heapSize, int rootIndex) {
        int largest = rootIndex;
        int leftChild = 2 * rootIndex + 1;
        int rigthChild = 2 * rootIndex + 2;

        if(leftChild < heapSize && array[leftChild] > array[largest]) {
            largest = leftChild;
        }
        
        if(rigthChild < heapSize && array[rigthChild] > array[largest]) {
            largest = rigthChild;
        }

        if(largest != rootIndex) {
            int temp = array[rootIndex];
            array[rootIndex] = array[largest];
            array[largest] = temp;

            heapify(array, heapSize, largest);
        }

    }
}
