class ColorSorter {
    public static void main(String[] args) {
        String[] colors = { "blue", "red", "yellow", "green", "black", "purple" };

        System.out.println("original colors: ");
        for (int i = 0; i < colors.length; i++) {
            System.out.print(colors[i] + " ");
        }

        for (int i = 0; i < colors.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < colors.length; j++) {
                if (colors[j].length() < colors[minIndex].length()) {
                    minIndex = j;
                }
            }

            String temp = colors[minIndex];
            colors[minIndex] = colors[i];
            colors[i] = temp;
        }

        System.out.println("\nsorted colors by length: ");
        for (int i = 0; i < colors.length; i++) {
            System.out.print(colors[i] + " ");
        }
    }
}