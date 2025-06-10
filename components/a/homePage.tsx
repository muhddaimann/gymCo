import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function HomePage() {
  const theme = useTheme();

  return (
    <View style={styles.page}>
      <View
        style={[
          styles.featureCard,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <MaterialCommunityIcons
          name="calendar-heart"
          size={wp("8%")}
          color={theme.colors.primary}
        />
        <View style={styles.featureText}>
          <Text
            style={[
              styles.featureTitle,
              { color: theme.colors.onPrimaryContainer },
            ]}
          >
            Today: Rest Day
          </Text>
          <Text
            style={[
              styles.featureSubtitle,
              { color: theme.colors.onPrimaryContainer },
            ]}
          >
            Light stretching and hydration
          </Text>
        </View>
        <Pressable
          style={[styles.logButton, { backgroundColor: theme.colors.primary }]}
        >
          <Text
            style={[styles.logButtonText, { color: theme.colors.onPrimary }]}
          >
            Log Activity
          </Text>
        </Pressable>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Progress
        </Text>
        <View style={styles.progressRow}>
          <View style={styles.statBox}>
            <MaterialCommunityIcons
              name="fire"
              size={wp("6%")}
              color={theme.colors.primary}
            />
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>
              4
            </Text>
            <Text
              style={[
                styles.statLabel,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              Day Streak
            </Text>
          </View>
          <View style={styles.statBox}>
            <MaterialCommunityIcons
              name="star-circle"
              size={wp("6%")}
              color={theme.colors.primary}
            />
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>
              2
            </Text>
            <Text
              style={[
                styles.statLabel,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              Badges
            </Text>
          </View>
          <View style={styles.statBox}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={wp("6%")}
              color={theme.colors.primary}
            />
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>
              3.5h
            </Text>
            <Text
              style={[
                styles.statLabel,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              Workout Time
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Health Sync
        </Text>
        <View style={styles.healthRow}>
          <View style={styles.healthItem}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={wp("5.5%")}
              color={theme.colors.tertiary}
            />
            <Text style={{ color: theme.colors.onSurface }}>76 bpm</Text>
          </View>
          <View style={styles.healthItem}>
            <MaterialCommunityIcons
              name="walk"
              size={wp("5.5%")}
              color={theme.colors.tertiary}
            />
            <Text style={{ color: theme.colors.onSurface }}>5,210 steps</Text>
          </View>
          <View style={styles.healthItem}>
            <MaterialCommunityIcons
              name="fire"
              size={wp("5.5%")}
              color={theme.colors.tertiary}
            />
            <Text style={{ color: theme.colors.onSurface }}>320 kcal</Text>
          </View>
        </View>
        <Text
          style={[
            styles.recoveryText,
            { color: theme.colors.onSurfaceVariant },
          ]}
        >
          Recovery Status: 80% • You’re ready for tomorrow’s session.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Smart Suggestions
        </Text>
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={wp("6%")}
            color={theme.colors.primary}
          />
          <Text
            style={[styles.suggestionText, { color: theme.colors.onSurface }]}
          >
            Try a 20-min dumbbell HIIT session before lunch.
          </Text>
        </View>
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons
            name="playlist-check"
            size={wp("6%")}
            color={theme.colors.tertiary}
          />
          <Text
            style={[styles.suggestionText, { color: theme.colors.onSurface }]}
          >
            Based on your logs, consider a mobility session this evening.
          </Text>
        </View>
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons
            name="run-fast"
            size={wp("6%")}
            color={theme.colors.secondary}
          />
          <Text
            style={[styles.suggestionText, { color: theme.colors.onSurface }]}
          >
            Your best workout time is around 6:00 PM.
          </Text>
        </View>
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons
            name="format-quote-close"
            size={wp("6%")}
            color={theme.colors.secondary}
          />
          <Text
            style={[
              styles.suggestionText,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            “Discipline = Freedom”
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.secondaryContainer,
          },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.colors.onSecondaryContainer },
          ]}
        >
          Tip of the Day
        </Text>
        <Text
          style={[
            styles.suggestionText,
            { color: theme.colors.onSecondaryContainer },
          ]}
        >
          Swap your afternoon coffee for a walk to improve sleep quality and
          recovery.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    gap: wp("2%"),
  },
  featureCard: {
    borderRadius: wp("4%"),
    padding: wp("4%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: wp("3%"),
    elevation: 3,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
  featureSubtitle: {
    fontSize: wp("3.5%"),
    marginTop: wp("1%"),
  },
  logButton: {
    paddingVertical: wp("2%"),
    paddingHorizontal: wp("4%"),
    borderRadius: wp("3%"),
  },
  logButtonText: {
    fontSize: wp("3.5%"),
    fontWeight: "600",
  },
  card: {
    borderRadius: wp("4%"),
    padding: wp("4%"),
    gap: wp("3%"),
    elevation: 2,
  },
  sectionTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: wp("5.5%"),
    fontWeight: "700",
  },
  statLabel: {
    fontSize: wp("3.2%"),
    marginTop: wp("1%"),
  },
  healthRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  healthItem: {
    alignItems: "center",
    gap: wp("1%"),
  },
  recoveryText: {
    fontSize: wp("3.5%"),
    marginTop: wp("2%"),
    fontStyle: "italic",
  },
  suggestionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
    marginTop: wp("2%"),
  },
  suggestionText: {
    fontSize: wp("3.8%"),
    flex: 1,
    fontWeight: "500",
  },
});
