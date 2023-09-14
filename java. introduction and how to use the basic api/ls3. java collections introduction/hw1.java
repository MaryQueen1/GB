import java.util.Arrays;

public class hw1 {

    public static int[] mergeSort(int[] a) {

        if (a.length <= 1) {
            return a;
        }

        int mid = a.length / 2;
        int[] left = new int[mid];
        int[] right = new int[a.length - mid];

        // Мы копируем элементы из массива a в массивы left и right. Мы копируем первые mid элементов из a в left, а оставшиеся элементы из a копируем в right.

        System.arraycopy(a, 0, left, 0, left.length);
        System.arraycopy(a, mid, right, 0, right.length);

        // Теперь мы рекурсивно вызываем метод mergeSort для сортировки массивов left и right. Это означает, что мы применяем тот же алгоритм сортировки слиянием к каждому из этих массивов.

        left = mergeSort(left);
        right = mergeSort(right);

        return merge(left, right);
    }

    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[k++] = left[i++];
            } else {
                result[k++] = right[j++];
            }
        }

        while (i < left.length) {
            result[k++] = left[i++];
        }

        while (j < right.length) {
            result[k++] = right[j++];
        }

        return result;

    }

    public static void main(String[] args) {

        int[] a = {5, 1, 6, 2, 3, 4};
        int[] sortedArray = hw1.mergeSort(a);
        System.out.println(Arrays.toString(sortedArray));

    }
}
